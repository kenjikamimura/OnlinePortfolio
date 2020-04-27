import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Entry from "../components/Entry"

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
      images={[
        data.open.childImageSharp,
        data.closed.childImageSharp,
        data.side.childImageSharp,
      ]}
      imageLayout="3-way-grid"
    />
  )
}

export default GearBoxPuzzle
