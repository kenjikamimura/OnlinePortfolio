import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const NavbarItem = ({ children, redirectUrl }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <div style={{ padding: "0 0.4rem" }}>
        <Link
          to={redirectUrl}
          style={{
            display: "inline-block",
            textDecoration: "none",
            width: "100%",
            padding: "0.5rem 0.5rem",
            borderRadius: "6px",
            color: "black",
          }}
          activeStyle={{
            background: "rgba(61, 61, 61, 0.1)",
          }}
        >
          {children}
        </Link>
      </div>
    </li>
  )
}

export default NavbarItem
