import React from "react"
import { Link } from "gatsby"

import Navbar from "../components/Navbar"
import SEO from "../components/seo"

const SecondPage = () => (
  <Navbar>
    <SEO title="Page two" />
    <h1>University Projects</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Navbar>
)

export default SecondPage
