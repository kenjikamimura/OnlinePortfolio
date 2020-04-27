import React from "react"
import { Link } from "gatsby"

import Navbar from "../components/Navbar"
import Image from "../components/image"
import SEO from "../components/seo"

import "../css/tailwind.scss"

const IndexPage = () => (
  <Navbar>
    <SEO title="Home" />
    <h1>Personal Portfolio</h1>
    <p>Welcome to my online portfolio</p>
    <p>Showcasing different projects of mine</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Personal Portfolio</h1>
    <p>Welcome to my online portfolio</p>
    <p>Showcasing different projects of mine</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Personal Portfolio</h1>
    <p>Welcome to my online portfolio</p>
    <p>Showcasing different projects of mine</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Personal Portfolio</h1>
    <p>Welcome to my online portfolio</p>
    <p>Showcasing different projects of mine</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Personal Portfolio</h1>
    <p>Welcome to my online portfolio</p>
    <p>Showcasing different projects of mine</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Navbar>
)

export default IndexPage
