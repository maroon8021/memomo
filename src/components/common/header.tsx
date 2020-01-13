import { Link } from "gatsby"
import * as React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import logo from "@s/images/memomo-logo.png"

/* Styles */
const title = css({
  //paddingTop: "3rem",
  textAlign: "center",
})

const logoStyle = css({
  width: "50%",
})

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 css={title}>
        <img src={logo} css={logoStyle} />
      </h1>
    </Link>
  </header>
)

export default Header
