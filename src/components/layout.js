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
import "./layout.css"

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "280px auto",
    gridTemplateRows: "100%",
    minHeight: "100vh",
  },
  navbar: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: "rgba(0, 0, 0, 0.12)",
  },
  main: {
    padding: "1rem",
  },
  logo: {
    width: "40px",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    marginLeft: "0.5rem",
    marginRight: "1.6rem",
  },
  navbarIcons: {
    height: "1.5rem",
    width: "1.5rem",
    marginLeft: "0.2rem",
    marginRight: "0.8rem",
  },
}

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.9rem",
            textDecoration: "none",
          }}
        >
          <img src={logo} alt="Logo" style={styles.logo} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              color: "black",
            }}
          >
            <span>Kenji</span>
            <span>Kamimura</span>
          </div>
        </Link>
        <ul style={{ marginTop: "0rem", marginLeft: "0" }}>
          <NavbarItem redirectUrl="/">
            <TiHomeOutline style={styles.navbarIcons} />
            Home
          </NavbarItem>
          <NavbarItem redirectUrl="/personal-projects">
            <TiCoffee style={styles.navbarIcons} />
            Personal Projects
          </NavbarItem>
          <NavbarItem redirectUrl="/university-projects">
            <TiMortarBoard style={styles.navbarIcons} />
            University Projects
          </NavbarItem>
          <NavbarItem redirectUrl="/drone-cinematography">
            <TiCameraOutline style={styles.navbarIcons} />
            Drone Cinematography
          </NavbarItem>
        </ul>
      </nav>
      <div style={styles.main}>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
