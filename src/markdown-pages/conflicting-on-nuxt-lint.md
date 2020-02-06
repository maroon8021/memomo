---
path: "/article/conflicting-on-nuxt-lint"
date: "2020-02-06"
title: "Nuxt上でのESLintとPrettierの競合"
---

# Nuxt 上での ESLint と Prettier の競合

Prettier を on にした状態で VSCode で save したタイミングで format するようにしたらデッドロックした話。

## 結論

`"editor.formatOnSave"` は false にすべき  
設定としては `"eslint.autoFixOnSave": true,` にする必要あり。

https://qiita.com/Misprochef/items/d8bccacfec3b550b8752
