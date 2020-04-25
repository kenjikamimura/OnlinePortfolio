import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const CapacitiveTouchBoxPuzzle = () => {
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

  return (
    <>
      <h1>Capacitive Touch Box Puzzle</h1>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.outside.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.open.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.inside.childImageSharp} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  )
}

export default CapacitiveTouchBoxPuzzle
