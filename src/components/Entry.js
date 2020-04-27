import React from "react"
import GatsbyImage from "gatsby-image"

const Entry = ({ title, body, images, imageLayout }) => {
  return (
    <div className="w-9/12 mx-40">
      <div className="flex justify-start items-center">
        <div>
          <h1 className="text-4xl my-4 font-black uppercase">{title}</h1>
          <div
            className="text-justify w-11/12 mr-1"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>

        {imageLayout === "3-way-grid" && (
          <div>
            <GatsbyImage
              key={"first"}
              className="w-64 mr-8 my-3"
              {...images.shift()}
            />
          </div>
        )}

        <div className="ml-3 mr-24">
          {images.map((imageData, key) => {
            return (
              <GatsbyImage
                key={key}
                className={
                  imageLayout === "3-way-grid"
                    ? "w-48 mr-8 my-3"
                    : "w-64 mr-8 my-3"
                }
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
