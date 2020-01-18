---
path: "/article/svg-responsive"
date: "2019-07-04"
title: "SVG のレスポンシブ対応について"
---

# SVG のレスポンシブ対応について

## 結論

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 464.351 32.114"
  style="max-width: 464px;"
></svg>
```

`viewBox` のみを触る  
width とか height を指定してしまうとそれで固定されてします。

## 参考 URL

[https://blanche-toile.com/web/responsive-svg-viewbox](https://blanche-toile.com/web/responsive-svg-viewbox)
