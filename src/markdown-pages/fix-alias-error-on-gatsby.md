---
path: "/article/fix-alias-error-on-gatsby"
date: "2020-01-19"
title: "gatsbyでtypescript使用時のaliasのエラーを消す方法"
---

# gatsby で typescript 使用時の alias のエラーを消す方法

とりあえず基本ここに書いてる  
https://medium.com/mr-leo/gatsbyjs-series-configure-useful-plugins-and-organize-project-part-2-d3acb0ffff5c

## typescript

https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/

## Alias

https://www.gatsbyjs.org/packages/gatsby-plugin-alias-imports/

↓
このままだとエラーが出てるので…

## tsconfig の修正

```js
{
  "compilerOptions" : {
    ...
    "paths" : {
      "@s/*":[
        "src/*"
      ]
    }
  }
}
```

`paths` のところに追加する
