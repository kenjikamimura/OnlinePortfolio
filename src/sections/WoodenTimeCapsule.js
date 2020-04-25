import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const WoodenTimeCapsule = () => {
  const data = useStaticQuery(graphql`
    {
      open: file(
        relativePath: { eq: "personalProjects/woodenTimeCapsule/open.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      closed: file(
        relativePath: { eq: "personalProjects/woodenTimeCapsule/closed.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "woodenTimeCapsule" } }) {
        html
      }
    }
  `)

  return (
    <>
      <h1>Wooden Time Capsule</h1>
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

export default WoodenTimeCapsule
