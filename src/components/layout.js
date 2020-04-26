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
import '../styles/styles.scss'

const Layout = ({ children }) => {
  const headerProps = {
    navItems: [
      { link: "/", name: "Home"},
      { link: "events", name: "Events"},
      { link: "accomodations", name: "Travel"},
      { link: "registry", name: "Registry"},
      { link: "RSVP", name: "RSVP"},
      { link: "Wedding Party", name: "Wedding Party"},
      { link: "Other Details", name: "Other Details"}
    ]
  }
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} headerProps={headerProps}/>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



