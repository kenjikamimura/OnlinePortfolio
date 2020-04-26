import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const GearBoxPuzzle = () => {
  const data = useStaticQuery(graphql`
    {
      open: file(
        relativePath: { eq: "personalProjects/gearBoxPuzzle/open.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      closed: file(
        relativePath: { eq: "personalProjects/gearBoxPuzzle/closed.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      side: file(
        relativePath: { eq: "personalProjects/gearBoxPuzzle/side.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "gearBoxPuzzle" } }) {
        html
      }
    }
  `)

  return (
    <>
      <h1>Gear Box Puzzle</h1>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.open.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.closed.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.side.childImageSharp} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  )
}

export default GearBoxPuzzle
