import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Nav } from 'react-bootstrap'


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
  color: coral;
`

const Header = ({ siteTitle }) => (
  <header>
    <TabBar>
      <Button>Test 1</Button>
      <Button>Test 2</Button>
    </TabBar>
    
  </header>
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
