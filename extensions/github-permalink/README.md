# GitHub Permalink Extension for VSCode

[markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#markdownlinkcopier) を vscode の拡張機能版

## Features
github リポジトリで管理している java, kotlin を開き、右クリックメニューから本機能を実行可能です。 この機能は以下の Markdown 形式でクリップボードにコピーします。

```
[{クラス名}#{メソッド名}#L{行番号}](Github Repository URL)
```

詳しくは[markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#markdownlinkcopier) 

## How to Use

1. github で管理されたリポジトリのJava、Kotlinファイルを開く
2. permalink を取得したい行にカーソルを移動、もしくは複数行を選択
3. `Ctrl+Shift+P` → "Copy GitHub Permalink" を選択

## Installation

1. github-permalink-X.X.X.vsix をダウンロードしてください。
2. 以下のコマンドによりvscodeに拡張機能をインストールしてください。 `code --install-extension github-permalink-X.X.X.vsix`

## License

MIT License
