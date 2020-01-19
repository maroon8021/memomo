---
path: "/article/no-index.html_on_AWS"
date: "2020-01-19"
title: "'index.html'を省略する方法 on AWS"
---

# 'index.html'を省略する方法 on AWS

https://dev.classmethod.jp/cloud/aws/cloudfront_s3_difference/

## CloudFront の設定

### Default Root Object

`Default Root Object` を `index.html` にする

### Origin Domain Name

`Origin Domain Name`に 静的ウェブサイトホスティングとして公開した S3 のエンドポイントから「http://」を除いた部分を入力
