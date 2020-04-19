import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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

const pages = [
  { name: "Home", url: "/" },
  { name: "Personal Projects", url: "/personal-projects" },
  { name: "University Projects", url: "/university-projects" },
  { name: "Drone Cinematography", url: "/drone-cinematography" },
]

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div
          style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}
        >
          <img src={logo} alt="Logo" style={styles.logo} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            <span>Kenji</span>
            <span>Kamimura</span>
          </div>
        </div>
        <ul style={{ margin: 0 }}>
          {pages.map(page => {
            return (
              <li style={{ listStyle: "none" }}>
                <div style={{ padding: "0 0.4rem" }}>
                  <Link
                    to={page.url}
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
                    {page.name}
                  </Link>
                </div>
              </li>
            )
          })}
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
