import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Entry from "../components/Entry"

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
    <Entry
      title="Wooden Time Capsule"
      body={data.markdownRemark.html}
      images={[data.open.childImageSharp, data.closed.childImageSharp]}
    />
  )
}

export default WoodenTimeCapsule
