---
path: "/article/full-screenshot-on-chrome"
date: "2020-01-30"
title: "Chromeで全画面スクリーンショット撮る方法"
---

# Chrome で全画面スクリーンショット撮る方法

① デベロッパーツール開く  
② `command+shift+P` を押す  
③ `full` と入れたら `[Screenshot] Capture full size screenshot` と出てくるから、それを選択  
④ ダウンロードされる

## なんかバグってそうな話

### 事象

`[Screenshot] Capture full size screenshot` でやっても画面全体が取れないときがある

### 解決策

(未確証だけど)Macbook 本体の画面で上のコマンドを叩くと、ちゃんと実行される。  
ただし、スマホの view はまだうまくいかない(画面に表示されている領域しか取得できない)

## 参考

https://requlog.com/self-branding/blog/chrome-full-screen-capture/
