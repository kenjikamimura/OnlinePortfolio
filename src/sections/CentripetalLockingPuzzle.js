import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Entry from "../components/Entry"

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
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <Entry
      title={data.markdownRemark.frontmatter.title}
      body={data.markdownRemark.html}
      images={[data.open.childImageSharp, data.closed.childImageSharp]}
    />
  )
}

export default CentripetalLockingPuzzle
