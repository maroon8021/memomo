---
path: "/article/ts-enum-type"
date: "2020-04-06"
title: "Enumぽいconstから型情報を生成する"
---

# Enum ぽい const から型情報を生成する

```
export const HEADER_COLOR_TYPE = {
  BLACK: "black",
  WHITE: "white",
} as const

export type HEADER_COLOR_TYPE = typeof HEADER_COLOR_TYPE[keyof typeof HEADER_COLOR_TYPE]
```
