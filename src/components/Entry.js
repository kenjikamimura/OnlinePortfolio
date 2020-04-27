import React from "react"
import GatsbyImage from "gatsby-image"

const Entry = ({ title, body, images }) => {
  return (
    <div className="w-9/12 mx-40">
      <div className="flex justify-start">
        <div>
          <h1 className="text-4xl my-4 font-bold">{title}</h1>
          <div
            className="text-justify w-11/12 mr-1"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>

        <div className="ml-3 mr-24">
          {images.map((imageData, key) => {
            return (
              <GatsbyImage
                key={key}
                className="w-64 mr-8 my-3"
                {...imageData}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Entry
