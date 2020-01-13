# Memo

## Add typescript settings on this gatsby project

https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb

## Use 'emotion'

https://www.gatsbyjs.org/docs/recipes/styling-css#using-emotion

## Add ESLint

https://dev.to/speshov/how-to-setup-gatsbyjs-starter-with-typescript-eslint-prettier-4jh3

## Alias

https://www.gatsbyjs.org/packages/gatsby-plugin-alias-imports/
↓
ts だとエラーでるから確認
https://medium.com/mr-leo/gatsbyjs-series-configure-useful-plugins-and-organize-project-part-2-d3acb0ffff5c

## Fix 'React is not defined'

https://github.com/ChristopherBiscardi/gatsby-mdx/issues/358

↓ いらなかった

```
options: {
  isTSX: true, // defaults to false
  jsxPragma: `jsx`, // defaults to "React"
  allExtensions: true, // defaults to false
},
```

### object access by typescript

https://aknow2.hatenablog.com/entry/2018/11/14/143033
