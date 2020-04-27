import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  TiHomeOutline,
  TiCameraOutline,
  TiMortarBoard,
  TiCoffee,
} from "react-icons/ti"
import NavbarItem from "./NavbarItem"
import logo from "../images/logo-black.png"
import "./reset.css"

const navbarIconStyles = "ml-1 mr-3 w-6 h-6"

const Navbar = ({ children }) => (
  <div
    className="grid grid-rows-1"
    style={{
      gridTemplateColumns: "280px auto",
      minHeight: "100vh",
    }}
  >
    <nav className="border-r border-solid border-gray-400 ">
      <Link className="m-4 flex justify-center items-center" to="/">
        <img src={logo} alt="Logo" className="w-10 my-2 mr-3 " />
        <div className="text-2xl font-bold uppercase flex flex-col justify-between">
          <span className="-mb-2">Kenji</span>
          <span className="-mt-2">Kamimura</span>
        </div>
      </Link>
      <ul>
        <NavbarItem redirectUrl="/">
          <TiHomeOutline className={navbarIconStyles} />
          Home
        </NavbarItem>
        <NavbarItem redirectUrl="/personal-projects">
          <TiCoffee className={navbarIconStyles} />
          Personal Projects
        </NavbarItem>
        <NavbarItem redirectUrl="/university-projects">
          <TiMortarBoard className={navbarIconStyles} />
          University Projects
        </NavbarItem>
        <NavbarItem redirectUrl="/drone-cinematography">
          <TiCameraOutline className={navbarIconStyles} />
          Drone Cinematography
        </NavbarItem>
      </ul>
    </nav>
    <div>
      <main>{children}</main>
    </div>
  </div>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navbar
