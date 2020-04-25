import React from "react"
import { Link, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PersonalProjects = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(
        relativePath: { eq: "personal-projects/box-puzzle/Box Puzzle.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo2: file(
        relativePath: { eq: "personal-projects/box-puzzle/Box Puzzle open.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo3: file(
        relativePath: {
          eq: "personal-projects/box-puzzle/Box Puzzle Inside.jpg"
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
        <GatsbyImage {...data.photo.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.photo2.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.photo3.childImageSharp} />
      </div>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default PersonalProjects
