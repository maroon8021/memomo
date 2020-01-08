import * as React from "react"
import { useState, useEffect } from "react"

import { Link } from "gatsby"
import Layout from "@s/components/common/layout"
import Header from "@s/components/common/header"

const IndexPage: React.FC = (): React.ReactElement => (
  <Layout>
    <Header />
    <div>
      <div>test</div>
    </div>
  </Layout>
)

export default IndexPage
