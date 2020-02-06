---
path: "/article/noindex-on-nuxt"
date: "2020-02-06"
title: "NuxtでNoindex"
---

# Nuxt で Noindex

```js
<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>
```

https://github.com/nuxt/nuxt.js/issues/3036
