import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Nav } from 'react-bootstrap'
import "typeface-oswald"
import "typeface-open-sans"


const TabBar = styled.div`
  width: 100%;
  display: flex;
  background: white;
  opacity: 0.5;
  justify-content: space-evenly;
`

const Button = styled.button`
  color: coral;
  border: none;
  border-bottom: .1em solid;
  background: transparent;
  opacity: 1;
  padding: 10px 10px 5px 10px;
  max-width: 120px;
  min-width: 90px;
  min-height: 80px;
  :hover {
    background: white;
    border-radius: 6px;
  }

  :focus {
    outline: 0;
    background: white;
    border-radius: 6px;
    
  }

  
`
const StyledLink = styled(Link)`
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  font-weight: normal;
  color: coral;
`

const LinkWrapper = styled.div`
  padding: 10px 15px;
`

const UpperAppBar = styled.div`
  width: 100%;
  height: 15px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: papayawhip;
  z-index: 1000;
`

const AppBar = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: papayawhip;
  color: lightcoral;
  z-index: 1000;
  display: flex;
  justify-content: center;
`

const Header = () => (
  <div>
    <UpperAppBar />
    <AppBar>
      <LinkWrapper>
        <StyledLink>
            About
        </StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink>
            Work
        </StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink>
            Contact
        </StyledLink>
      </LinkWrapper>
    </AppBar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


