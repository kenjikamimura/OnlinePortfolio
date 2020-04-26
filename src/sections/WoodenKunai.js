import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

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
    <>
      <h1>Wooden Kunai</h1>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.main.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.front.childImageSharp} />
      </div>
      <div style={{ width: "200px" }}>
        <GatsbyImage {...data.back.childImageSharp} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  )
}

export default WoodenKunai
