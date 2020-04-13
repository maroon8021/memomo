---
path: "/article/git-diff-archiving"
date: "2020-04-13"
title: "gitで差分ファイル抽出"
---

# git で差分ファイル抽出

`archive.zip` という名前でワークスペースの root に生成される(正確にいうと多分コマンド実行ディレクトリ)

```
git archive [コミットID2] `git diff --name-only [コミットID1] [コミットID2] --diff-filter=ACMR` -o archive.zip
```
