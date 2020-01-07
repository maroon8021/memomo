import * as React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <>
    <SEO title="memomo" lang="ja">
      <meta name="robots" content="noindex" />
    </SEO>
    <main className="container">{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
