import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "25% auto",
    gridTemplateRows: "100%",
    minHeight: "100vh",
  },
  navbar: {
    maxWidth: `300px`,
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
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={{}}>{data.site.siteMetadata.title}</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personal-projects">Personal Projects</Link>
          </li>
          <li>
            <Link to="/university-projects">Universtiy Projects</Link>
          </li>
          <li>
            <Link to="/drone-cinematography">Drone Cinematography</Link>
          </li>
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
