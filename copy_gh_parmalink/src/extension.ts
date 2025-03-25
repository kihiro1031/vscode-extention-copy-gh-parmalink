import * as vscode from "vscode";
import * as child_process from "child_process";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.copyGitHubPermalinkShort",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active file.");
        return;
      }

      const document = editor.document;
      const filePath = document.fileName;
      const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
      if (!workspaceFolder) {
        vscode.window.showErrorMessage("File is not in a Git repository.");
        return;
      }

      // カレントブランチの最新コミットハッシュを取得
      const commitHash = executeCommand("git rev-parse HEAD", workspaceFolder.uri.fsPath).trim();

      // Git のリモート URL を取得
      let repoUrl = executeCommand("git config --get remote.origin.url", workspaceFolder.uri.fsPath).trim();
      repoUrl = convertSshUrlToHttps(repoUrl);

      // ファイルのリポジトリルートからの相対パスを取得
      const repoRoot = executeCommand("git rev-parse --show-toplevel", workspaceFolder.uri.fsPath).trim();
      const relativePath = path.relative(repoRoot, filePath);

      // 選択した行を取得
      const selection = editor.selection;
      const startLine = selection.start.line + 1;
      const endLine = selection.end.line + 1;
      const lineRange = startLine !== endLine ? `#L${startLine}-L${endLine}` : `#L${startLine}`;

      // クラス/メソッド名を取得（簡易版）
      const className = getClassOrMethodName(document, selection.start);
      const methodName = getClassOrMethodName(document, selection.start, true);

      // Markdown 形式のリンクを生成
      const displayString = methodName ? `${className}#${methodName}${lineRange}` : `${className}${lineRange}`;
      const permalink = `${repoUrl}/blob/${commitHash}/${relativePath}${lineRange}`;
      const markdownLink = `[${displayString}](${permalink})`;

      // クリップボードにコピー
      vscode.env.clipboard.writeText(markdownLink);
      vscode.window.showInformationMessage("GitHub Permalink copied!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

// Git コマンドを実行するヘルパー関数
function executeCommand(command: string, cwd: string): string {
  try {
    return child_process.execSync(command, { cwd }).toString();
  } catch (error) {
    vscode.window.showErrorMessage(`Error executing: ${command}`);
    return "";
  }
}

// SSH の GitHub URL を HTTPS に変換する
function convertSshUrlToHttps(sshUrl: string): string {
  return sshUrl.startsWith("git@github.com:")
    ? sshUrl.replace("git@github.com:", "https://github.com/").replace(/\.git$/, "")
    : sshUrl.replace(/\.git$/, "");
}

// クラス/メソッド名を取得する（簡易版）
function getClassOrMethodName(document: vscode.TextDocument, position: vscode.Position, isMethod = false): string {
  const text = document.getText();
  const lines = text.split("\n").slice(0, position.line + 1).reverse();
  const regex = isMethod ? /(fun|def|void|function)\s+(\w+)\s*\(/ : /(class|object|interface)\s+(\w+)/;
  
  for (const line of lines) {
    const match = line.match(regex);
    if (match) return match[2];
  }
  return document.fileName.split("/").pop()?.split(".")[0] || "Unknown";
}
	