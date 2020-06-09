---
path: "/article/node-version-management"
date: "2020-06-09"
title: "Nodeのバージョン管理について"
---

# Node のバージョン管理について

## n の消し方

前はなんとなく `n` を使ってましたが、今回から各プロジェクト単位で node のバージョンをゴニョゴニョしたいときがったので、一旦 uninstall することにしました。

https://qiita.com/kouki_tsuji/items/bf4951a76d221e874fdd

## avn を使おうとした話

結論: なんかうまくいかなかった
https://qiita.com/kc7891/items/435bf552cf221ed9d329

## nodenv の話

`.node-version` で管理できるのはよい。
ただし、nodenv なり、なんらかの共通の管理ツールを入れなきゃいけないので、そこは共通化する必要がある
https://qiita.com/1000ch/items/41ea7caffe8c42c5211c
