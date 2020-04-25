import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.outside.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.open.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.inside.childImageSharp} />
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default PersonalProjects
