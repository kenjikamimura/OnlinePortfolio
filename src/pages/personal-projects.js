import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import GatsbyImage from "gatsby-image"
import CapacitiveTouchBoxPuzzle from "../sections/CapacitiveTouchBoxPuzzle"
import WoodenTimeCapsule from "../sections/WoodenTimeCapsule"
import WoodenKunai from "../sections/WoodenKunai"
import GearBoxPuzzle from "../sections/GearBoxPuzzle"
import CentripetalLockingPuzzle from "../sections/CentripetalLockingPuzzle"
import Column from "../components/Column"

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
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <Navbar>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <div
        className="relative  bg-gray-400 overflow-hidden"
        style={{ height: "20rem" }}
      >
        <div className="bg-yellow-200 ">
          <GatsbyImage
            className="w-full opacity-25 -mb-7/12"
            {...data.main.childImageSharp}
          />
        </div>
        <div className="w-5/12 bg-black text-white p-6 opacity-75 absolute bottom-0 ml-40">
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase">
            {data.markdownRemark.frontmatter.title}
          </h1>
          <div
            className="py-3"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
      </div>

      <Column>
        <CapacitiveTouchBoxPuzzle />
        <WoodenTimeCapsule />
        <WoodenKunai />
        <GearBoxPuzzle />
        <CentripetalLockingPuzzle />
      </Column>
    </Navbar>
  )
}

export default PersonalProjects
