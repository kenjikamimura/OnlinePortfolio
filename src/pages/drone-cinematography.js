import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import Column from "../components/Column"
import VideoEntry from "../components/VideoEntry"

const DroneCinematography = () => {
  const {
    droneImage,
    droneCinematography,
    wainamuLuxuryTents,
    mercerBayLoopWalk,
    teAraiPoint,
    mtFuji,
  } = useStaticQuery(graphql`
    {
      droneImage: file(relativePath: { eq: "drone-te-arai.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
      mercerBayLoopWalk: markdownRemark(
        frontmatter: { id: { eq: "mercerBayLoopWalk" } }
      ) {
        html
        frontmatter {
          title
          videoSource
        }
      }
      teAraiPoint: markdownRemark(frontmatter: { id: { eq: "teAraiPoint" } }) {
        html
        frontmatter {
          title
          videoSource
        }
      }
      mtFuji: markdownRemark(frontmatter: { id: { eq: "mtFuji" } }) {
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
      <SEO title={droneCinematography.frontmatter.title} />
      <h1>{droneCinematography.frontmatter.title}</h1>
      <GatsbyImage className="w-64 mr-8 my-3" {...droneImage.childImageSharp} />
      <div
        className="text-justify w-11/12 mr-1"
        dangerouslySetInnerHTML={{
          __html: droneCinematography.html,
        }}
      />
      <Column>
        <VideoEntry
          title={wainamuLuxuryTents.frontmatter.title}
          body={wainamuLuxuryTents.html}
          videoSource={wainamuLuxuryTents.frontmatter.videoSource}
        />
        <VideoEntry
          title={mercerBayLoopWalk.frontmatter.title}
          body={mercerBayLoopWalk.html}
          videoSource={mercerBayLoopWalk.frontmatter.videoSource}
        />
        <VideoEntry
          title={teAraiPoint.frontmatter.title}
          body={teAraiPoint.html}
          videoSource={teAraiPoint.frontmatter.videoSource}
        />
        <VideoEntry
          title={mtFuji.frontmatter.title}
          body={mtFuji.html}
          videoSource={mtFuji.frontmatter.videoSource}
        />
      </Column>
    </Navbar>
  )
}

export default DroneCinematography
