import React from "react"
import { Link } from "gatsby"

const NavbarItem = ({ children, redirectUrl }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <div style={{ padding: "0 0.4rem" }}>
        <Link
          to={redirectUrl}
          className="p-2 rounded-md flex "
          activeClassName="bg-gray-200"
        >
          {children}
        </Link>
      </div>
    </li>
  )
}

export default NavbarItem
