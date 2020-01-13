---
path: "/article/how-to-add-github-action"
date: "2020-01-13"
---

# Github Action と AWS の設定の仕方

## 1. github の action タブで新規作成

ひとまずは yourself で作れたらよいかも
大体これで作ったやつのコピペでいけそう
https://github.com/maroon8021/th-portal/blob/master/.github/workflows/main.yml

## 2. AWS 側の設定

- s3 のバケット作成。アクセスは開放するように。
- cloudfront との連携(ここは今度用追加な気がする)

## 3. 「Secrets」の追加

### それぞれの設定

- AWS_S3_BUCKET
- DISTRIBUTION_ID

### github action ように作った IAM の追加

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

あとは git に push するだけ？
