---
path: "/article/CORS"
date: "2020-04-05"
title: "CORSまわりでいろいろ困ったこと"
---

# CORS まわりでいろいろ困ったこと

とりあえず。
https://qiita.com/att55/items/2154a8aad8bf1409db2b
https://qiita.com/mochizukikotaro/items/6b72ad595db8a6b5514f

## エラーいろいろ

### preflight response

```
has been blocked by CORS policy: Request header field access-control-allow-origin is not allowed by Access-Control-Allow-Headers in preflight response.
```

最初に`OPTION` でリクエスト投げられるので、そのタイミングで適切な header を返す必要があるみたい

```
public function beforeFilter(){
	parent::beforeFilter();
	if($this->request->is("options")){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Allow-Methods: POST');
		exit();
	}
}
```

### 例のやつ

preflight response に対応したら ↓

```
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

になった。
そしたら同様に `POST` 側にも `'Access-Control-Allow-Origin: *'`　を足す必要あり。

## メモ

- GET と POST でも挙動やクエリの渡し方が異なるかんじなので注意
- 渡したいパラメーターが渡せていないなんてことも起きてた
- ロジックが途中でコケてて header を渡せてなくて、CORS でひっかかってたときもあった。
