---
path: "/article/reset.ts"
date: "2020-06-22"
title: "reset.ts"
---

# reset.ts

なんかこれちゃんと外に出して管理したい。

https://github.com/maroon8021/next-starter/blob/master/styles/reset.ts

```
// _app.tsx

import { Global, css } from "@emotion/core"
import reset from "../styles/reset"

...

<Global
  styles={css`
    ${reset}
  `}
/>

```
