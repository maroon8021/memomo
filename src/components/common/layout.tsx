import * as React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import "@s/scss/style.scss"

const Layout: React.FC = ({ children }): React.ReactElement => (
  <>
    <SEO title="memomo" lang="ja">
      <meta name="robots" content="noindex" />
    </SEO>
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
