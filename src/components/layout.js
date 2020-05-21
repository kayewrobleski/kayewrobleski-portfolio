/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Banner from './layout/Banner'
import styled from 'styled-components'
import Logo from './Logo'

import Header from "./header"
import "./layout.css"
// import "./layout/styles/Banner.scss"

const CustomizedBanner = styled(Banner)`
  box-shadow: 0 0.05em 0.3em lightcoral;
  text-transform: uppercase;
  font-weight: light;
`

const EmptyChunk = styled.div`
  flex-grow: 1;
`

const BannerPadding = styled.div`
    width: 200px;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <CustomizedBanner thickness="sm" justifyContent="center">
        <BannerPadding />
        <Logo width="50" height="50" />
          <EmptyChunk />
          <h6>About</h6>
          <h6>Work</h6>
          <h6>Portfolio</h6>
          <h6>Contact</h6>
        <BannerPadding />
      </CustomizedBanner>
      { children }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
