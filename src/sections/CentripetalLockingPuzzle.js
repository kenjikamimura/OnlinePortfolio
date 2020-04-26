import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const CentripetalLockingPuzzle = () => {
  const data = useStaticQuery(graphql`
    {
      open: file(
        relativePath: {
          eq: "personalProjects/centripetalLockingPuzzle/open.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      closed: file(
        relativePath: {
          eq: "personalProjects/centripetalLockingPuzzle/closed.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "centripetalLockingPuzzle" } }) {
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
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  )
}

export default CentripetalLockingPuzzle
