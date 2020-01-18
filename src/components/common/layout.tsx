import * as React from "react"
import PropTypes from "prop-types"
import "@s/scss/style.scss"

const Layout: React.FC = ({ children }): React.ReactElement => (
  <>
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
