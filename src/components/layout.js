/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./index.css"

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
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto flex-1 flex flex-col content-center container lg:max-w-3xl">
        <main className="w-full flex-1">{children}</main>
<<<<<<< HEAD
        <footer className="mt-4 flex justify-center py-2 font-body">
          <Link to="/crypto" className="mx-4 underline">
            Crypto
          </Link>
          <div>© {new Date().getFullYear()}, Daniel Schlabach</div>
=======
        <footer className="mt-4 text-center py-2 font-body">
          <Link className="mx-2 font-body underline" to="/blog/">
            Articles
          </Link>
          © {new Date().getFullYear()}, Daniel Schlabach
>>>>>>> 80ad0b8a07b9a07600ef0d34462a3d85fe2eb658
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
