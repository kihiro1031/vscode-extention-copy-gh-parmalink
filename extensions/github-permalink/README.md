# Copy GitHub Permalink in VSCode

[markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#markdownlinkcopier) の vscode の拡張機能版

## Features
github で管理している Java, kotlin ファイルを開き、右クリックメニューから本機能を実行可能です。 この機能は以下の Markdown 形式でクリップボードにコピーします。

```
[{クラス名}#{メソッド名}#L{行番号}](Github Repository URL)
```

詳しくは[markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#markdownlinkcopier) 

## How to Use

1. github で管理されたリポジトリのJava、Kotlinファイルを開く
2. permalink を取得したい行にカーソルを移動、もしくは複数行を選択
3. `Ctrl+Shift+P` → "(Markdown) Copy Link to Github Repository" を選択、もしくはキーボードショートカット(`⌃⇧C`)

## Installation

1. releases の github-permalink-X.X.X.vsix をダウンロードしてください。
2. 以下のコマンドによりvscodeに拡張機能をインストールしてください。 `code --install-extension github-permalink-X.X.X.vsix`

## License

MIT License
