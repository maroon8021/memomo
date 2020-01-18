const path = require("path")

module.exports = {
  siteMetadata: {
    title: `memomo`,
    description: `Useful Memo`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-remove-console`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-plugin-scss-typescript",
      options: {
        sassLoaderOptions: {
          includePaths: [path.resolve(__dirname, "./src/scss")],
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `memomo`,
        short_name: `memomo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/memomo-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@s": "src",
        },
        extensions: ["tsx", "png"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
