import React from "react"

const Column = ({ children }) => {
  return children.map((childComponent, key) => {
    return (
      <div className="my-12" key={key}>
        {childComponent}
      </div>
    )
  })
}

export default Column
