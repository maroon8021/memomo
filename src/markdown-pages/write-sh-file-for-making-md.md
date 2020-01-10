---
path: "/article/write-sh-file-for-making-md"
date: "2019-07-04"
---

# ShellScript から特定の内容を記載した md ファイルを作成できるようにした

久しぶりに shell 書いたら覚えてないことが多かったので備忘録

## 引数のとり方

`$1, $2` 的なかんじで取れる

## string の接続

`$1.md` とか `'path: "/article/'$1'"'` ができた。普通につなげればよさそう

## ファイルへの書き込み

`echo 'hoge' >> $1.md`
なるほど

## 参考

[初心者向けシェルスクリプトの基本コマンドの紹介](https://qiita.com/zayarwinttun/items/0dae4cb66d8f4bd2a337)
