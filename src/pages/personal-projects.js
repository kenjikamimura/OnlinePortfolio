import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CapacitiveTouchBoxPuzzle from "../sections/CapacitiveTouchBoxPuzzle"
import WoodenTimeCapsule from "../sections/WoodenTimeCapsule"
import WoodenKunai from "../sections/WoodenKunai"
import GearBoxPuzzle from "../sections/GearBoxPuzzle"
import CentripetalLockingPuzzle from "../sections/CentripetalLockingPuzzle"

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
      <WoodenKunai />
      <GearBoxPuzzle />
      <CentripetalLockingPuzzle />
    </Layout>
  )
}

export default PersonalProjects
