import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Entry from "../components/Entry"

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
        data.outside.childImageSharp,
        data.open.childImageSharp,
        data.inside.childImageSharp,
      ]}
    />
  )
}

export default CapacitiveTouchBoxPuzzle
