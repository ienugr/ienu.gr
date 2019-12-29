/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navLinks
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteLinks={data.site.siteMetadata.navLinks} />
      <div className="container mx-auto p-4 sm:mx-auto">
        {children}
        <p className="text-gray-600 mt-4">
          This site is still in-progress
          <br /> Sorry for the inconvenience
        </p>

        <footer className="absolute bottom-0 mb-4 sm:mx-auto text-gray-700 font-semibold tracking-wide">
          © {new Date().getFullYear()} 
          <span className="uppercase"> { data.site.siteMetadata.title }</span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
