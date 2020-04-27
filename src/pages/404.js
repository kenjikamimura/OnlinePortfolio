import React from "react"

import Navbar from "../components/Navbar"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Navbar>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Navbar>
)

export default NotFoundPage
