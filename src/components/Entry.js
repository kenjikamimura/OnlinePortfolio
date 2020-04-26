import React from "react"
import GatsbyImage from "gatsby-image"

const Entry = ({ title, body, images }) => {
  return (
    <div className="w-9/12 m-auto">
      <h1 className="text-4xl my-4 font-bold">{title}</h1>
      <div className="flex justify-start">
        <div
          className="text-justify w-6/12"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <div className="mx-8">
          {images.map(imageData => {
            return <GatsbyImage className="w-64 mr-8" {...imageData} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Entry
