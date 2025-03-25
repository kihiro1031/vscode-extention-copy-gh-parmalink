# Copy GitHub Permalink (Markdown Short Style) in VSCode

[markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#markdownlinkcopier) の vscode の拡張機能版

Java, kotlin に対応(他の言語はどのように動作するかテストしていません)

## Features
github で管理している Java, kotlin ファイルを開き、以下の Markdown 形式でクリップボードにコピーします。

```
[{クラス名}#{メソッド名}#L{行番号}](https://xxx)
```

具体例はこちらを参照[markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#examples) 

## How to Use

1. github で管理されたリポジトリのJava、Kotlinファイルを開く
2. permalink を取得したい行にカーソルを移動、もしくは複数行を選択
3. `Ctrl+Shift+P` → "Copy GitHub Permalink (Markdown Short Style)" を選択、もしくはキーボードショートカット(`⌃⇧C`)

## License

MIT License

---

# Copy GitHub Permalink (Markdown Short Style) in VSCode

A VSCode extension version of [markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#markdownlinkcopier)

Supports Java and Kotlin (other languages have not been tested for compatibility)

## Features
This extension copies a permalink to your clipboard in Markdown format when you open Java or Kotlin files managed on GitHub.

```
[{ClassName}#{MethodName}#L{LineNumber}](https://xxx)
```

For specific examples, please refer to [markdownlinkcopier](https://github.com/kihiro1031/IntelliJGithubLinkCopyPlugin/tree/master?tab=readme-ov-file#examples)

## How to Use

1. Open a Java or Kotlin file from a GitHub repository
2. Move your cursor to the line you want to get a permalink for, or select multiple lines
3. Press `Ctrl+Shift+P` → Select "Copy GitHub Permalink (Markdown Short Style)", or use the keyboard shortcut (`⌃⇧C`)

## License

MIT License
