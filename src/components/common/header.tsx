import { Link } from "gatsby"
import * as React from "react"

import logo from "@s/images/memomo-logo.png"

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="title">
        <img src={logo} />
      </h1>
    </Link>
  </header>
)

export default Header
