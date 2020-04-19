import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"
import NavbarItem from "./NavbarItem"
import logo from "../images/logo-black.png"
import "./layout.css"

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "250px auto",
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
    margin: "0.5rem",
  },
}

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.5rem",
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
        <ul style={{ margin: 0 }}>
          <NavbarItem redirectUrl="/">Home</NavbarItem>
          <NavbarItem redirectUrl="/personal-projects">
            Personal Projects
          </NavbarItem>
          <NavbarItem redirectUrl="/university-projects">
            University Projects
          </NavbarItem>
          <NavbarItem redirectUrl="/drone-cinematography">
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
