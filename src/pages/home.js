// import React from 'react'
import "typeface-oswald"
import "typeface-open-sans"
import "typeface-lobster-two"

// import styled from "styled-components"
// import BackgroundImage from "gatsby-background-image"
// import Img from "gatsby-image"
// // import { useStaticQuery, graphql } from "gatsby"
// import StaticQuery from "gatsby"

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import "./styles/background-image.css"

const Container = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    color: white;
    // width: 100%;
    width: 500px;
    z-index: 1;
    // background-color: rgb(47, 79 , 79, 0.6);
    border-radius: 4px;
    color: #273746
`

export const StyledWrapper = styled.div`
  // height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  z-index: 0;
  opacity: 0.25;
`

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #ccc;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Name = styled.h1`
    font-family: Oswald, sans-serif;
    font-weight: bold;
    font-size: 4.0rem;
    margin-bottom: 1.15rem;
    margin-top: 1rem;
`

const Description = styled.h3`
    font-family: Open Sans, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
`

const Divider = styled.hr`
    width: 450px;
    border-top: 3px solid #F08080;
    margin: calc(1.15rem - 1px) auto;
    background-color: transparent;
    // display: none;
`

const NewOrleansFullBackground = ({className, children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "images/new-orleans-bg-lg.jpeg"}) {
          childImageSharp {
            fluid(maxWidth: 4160, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        title="New Orleans Fullscreen Background"
        role="img"
        preserveStackingContext={true}
        fluid={data.desktop.childImageSharp.fluid}
      >
        { children }
      </BackgroundImage>
    </StyledFullScreenWrapper>
  );
}

// background-size="contain"


const TopAppBar = styled.div`
  width: 100%;
  height: 15px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: papayawhip;
  // display: none;
`

const BottomAppBar = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
`

const StyledFullBackground = styled(NewOrleansFullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  opacity: 0.25;
`


const HomePage = () => (
    <div>
    {/* <StyledFullBackground /> */}
    <Container>
        <Name>Kaye Wrobleski</Name>
        <Divider />
        <Description>Full Stack Software Engineer</Description>
    </Container>
  </div>
)

export default HomePage