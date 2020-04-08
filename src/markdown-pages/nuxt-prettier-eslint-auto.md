---
path: "/article/nuxt-prettier-eslint-auto"
date: "2020-04-08"
title: "NuxtでautoFormatする方法@VScode"
---

# Nuxt で autoFormat する方法@VScode

settings.json

```
{
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.autoFixOnSave": true, // Basically has been deprecated, newer VSCode will use "editor.codeActionsOnSave"
}
```
