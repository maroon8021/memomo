---
path: "/article/next-prettier-eslint-auto"
date: "2020-04-08"
title: "NextでautoFormatする方法@VScode"
---

# Next で autoFormat する方法@VScode

settings.json

```
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {"language": "typescript", "autoFix": true },
    {"language": "typescriptreact", "autoFix": true }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.autoFixOnSave": true, // Basically has been deprecated, newer VSCode will use "editor.codeActionsOnSave"
}
```

nuxt で設定する内容とほぼ変わらない印象だが、 `eslint.validate` の中身が異なる
