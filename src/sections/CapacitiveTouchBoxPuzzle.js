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
    <div className="w-9/12 m-auto">
      <h1 className="text-4xl my-4 font-bold">Capacitive Touch Box Puzzle</h1>
      <div className="flex justify-start">
        <div
          className="text-justify w-6/12"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="mx-8">
          <GatsbyImage
            className="w-64 mr-8"
            {...data.outside.childImageSharp}
          />
          <GatsbyImage className="w-64 mr-8" {...data.open.childImageSharp} />
          <GatsbyImage className="w-64 mr-8" {...data.inside.childImageSharp} />
        </div>
      </div>
    </div>
  )
}

export default CapacitiveTouchBoxPuzzle
