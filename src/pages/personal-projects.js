import React from "react"
import { Link, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PersonalProjects = () => {
  const data = useStaticQuery(graphql`
    {
      outside: file(
        relativePath: {
          eq: "personalProjects/capacitiveTouchBoxPuzzle/outside.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      open: file(
        relativePath: {
          eq: "personalProjects/capacitiveTouchBoxPuzzle/open.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inside: file(
        relativePath: {
          eq: "personalProjects/capacitiveTouchBoxPuzzle/inside.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Personal Projets" />
      <h1>Personal Projects</h1>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.outside.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.open.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.inside.childImageSharp} />
      </div>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default PersonalProjects
