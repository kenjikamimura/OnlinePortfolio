import React from "react"

const VideoEntry = ({ title, body, videoSource }) => {
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
        <iframe
          allowfullscreen=""
          title="youtube Video Player"
          src={videoSource}
        ></iframe>
      </div>
    </div>
  )
}

export default VideoEntry
