---
path: "/article/s3-policy"
date: "2019-07-04"
---

# S3 のバケット制御を試してみた

セキュリティ関連の認識がザルなんですが、一旦 get はどこからでもできつつ、put は特定のユーザーからしかできない状態にしたいなと思って試してみました。

## 結論

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": ["arn:aws:s3:::hogehoge", "arn:aws:s3:::hogehoge/*"]
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::000000:user/hogehoge-user"
      },
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::hogehoge", "arn:aws:s3:::hogehoge/*"]
    },
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": ["arn:aws:s3:::hogehoge", "arn:aws:s3:::hogehoge/*"],
      "Condition": {
        "StringNotEquals": {
          "aws:username": "hogehoge-user"
        }
      }
    }
  ]
}
```

最初 `Deny` のところで `Action` を `s3:*` としていたが、そうすると get まで弾かれてしまったので、`PutObject` に変更。  
こうすることによってホスティングしてるところにはアクセスできるようになった。

これに関してはブログに移行してもよさそう。
