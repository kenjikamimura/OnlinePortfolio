import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Entry from "../components/Entry"

const WoodenKunai = () => {
  const data = useStaticQuery(graphql`
    {
      main: file(
        relativePath: { eq: "personalProjects/woodenKunai/main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      front: file(
        relativePath: { eq: "personalProjects/woodenKunai/front.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      back: file(
        relativePath: { eq: "personalProjects/woodenKunai/back.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "woodenKunai" } }) {
        html
      }
    }
  `)

  return (
    <Entry
      title="Wooden Kunai"
      body={data.markdownRemark.html}
      images={[
        data.main.childImageSharp,
        data.front.childImageSharp,
        data.back.childImageSharp,
      ]}
    />
  )
}

export default WoodenKunai
