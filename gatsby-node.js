/* eslint-disable no-console */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const fs = require(`fs`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/article-base.tsx`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      // eslint-disable-next-line no-undef
      return Promise.reject(result.errors)
    }

    console.log("showing result")
    console.log(JSON.stringify(result))
    const count = result.data.allMarkdownRemark.edges.length
    const textData = []
    return result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
      console.log("log is shown")
      console.log(JSON.stringify(node))
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
      let title = node.html.match(/<h1>.+<\/h1>/g)[0]
      title = title.replace(/<.{1,5}>/g, "")
      let text = node.html.replace(/<h1>.+<\/h1>/g, "")
      text = text.replace(/<.{1,5}>/g, "")
      text = text.replace(/<code .+">/g, " ")
      text = text.replace(/\n/g, " ")
      textData.push({
        path: node.frontmatter.path,
        title,
        text,
      })
      if (count === index + 1) {
        fs.writeFile("static/data.json", JSON.stringify(textData), err => {
          if (err) console.log(err)
          else console.log("write end")
        })
      }
    })
  })
}
