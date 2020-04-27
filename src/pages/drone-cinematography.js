import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import Column from "../components/Column"
import VideoEntry from "../components/VideoEntry"

const DroneCinematography = () => {
  const data = useStaticQuery(graphql`
    {
      droneCinematography: markdownRemark(
        frontmatter: { id: { eq: "droneCinematography" } }
      ) {
        html
        frontmatter {
          title
        }
      }
      wainamuLuxuryTents: markdownRemark(
        frontmatter: { id: { eq: "wainamuLuxuryTents" } }
      ) {
        html
        frontmatter {
          title
          videoSource
        }
      }
    }
  `)

  return (
    <Navbar>
      <SEO title={data.droneCinematography.frontmatter.title} />
      <h1>{data.droneCinematography.frontmatter.title}</h1>
      <div
        className="text-justify w-11/12 mr-1"
        dangerouslySetInnerHTML={{
          __html: data.droneCinematography.html,
        }}
      />
      <Column>
        <VideoEntry
          title={data.wainamuLuxuryTents.frontmatter.title}
          body={data.wainamuLuxuryTents.html}
          videoSource={data.wainamuLuxuryTents.frontmatter.videoSource}
        />
        <VideoEntry />
      </Column>
    </Navbar>
  )
}

export default DroneCinematography
