import * as React from "react"
import { graphql } from "gatsby"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Layout from "@s/components/common/layout"
import Header from "@s/components/common/header"

//import "@s/scss/article.scss"
import "wysiwyg.css"

/* Styles */
const section = css({
  padding: "3rem 1.5rem",
})

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  return (
    <Layout>
      <Header />
      <div css={section}>
        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
