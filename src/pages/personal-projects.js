import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GatsbyImage from "gatsby-image"
import CapacitiveTouchBoxPuzzle from "../sections/CapacitiveTouchBoxPuzzle"
import WoodenTimeCapsule from "../sections/WoodenTimeCapsule"
import WoodenKunai from "../sections/WoodenKunai"
import GearBoxPuzzle from "../sections/GearBoxPuzzle"
import CentripetalLockingPuzzle from "../sections/CentripetalLockingPuzzle"

const PersonalProjects = () => {
  const data = useStaticQuery(graphql`
    {
      main: file(relativePath: { eq: "personalProjects/speakerCase.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "personalProjects" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Personal Projets" />
      <div className="relative h-64 bg-gray-400 overflow-hidden">
        <div className="bg-yellow-200">
          <GatsbyImage
            className="w-full sm:-my-16 md:-my-32 xl:-my-40 opacity-25"
            {...data.main.childImageSharp}
          />
        </div>
        <div className="w-5/12 bg-black text-white p-6 opacity-75 absolute bottom-0 h-64 ml-40">
          <h1 className="text-5xl font-black uppercase">Personal Projects</h1>
          <div
            className="py-3"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
      </div>

      <CapacitiveTouchBoxPuzzle />
      <WoodenTimeCapsule />
      <WoodenKunai />
      <GearBoxPuzzle />
      <CentripetalLockingPuzzle />
    </Layout>
  )
}

export default PersonalProjects
