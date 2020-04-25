import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CapacitiveTouchBoxPuzzle from "../sections/capacitiveTouchBoxPuzzle"
import WoodenTimeCapsule from "../sections/WoodenTimeCapsule"

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
      markdownRemark(frontmatter: { id: { eq: "capacitiveTouchBoxPuzzle" } }) {
        html
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <SEO title="Personal Projets" />
      <h1>Personal Projects</h1>
      <CapacitiveTouchBoxPuzzle />
      <WoodenTimeCapsule />
    </Layout>
  )
}

export default PersonalProjects
