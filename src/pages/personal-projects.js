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
      markdownRemark(frontmatter: { id: { eq: "personalProjects" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Personal Projets" />
      <h1>Personal Projects</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <CapacitiveTouchBoxPuzzle />
      <WoodenTimeCapsule />
    </Layout>
  )
}

export default PersonalProjects
