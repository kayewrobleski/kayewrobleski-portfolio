import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledHeader1 = styled.h1`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h1.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
`

const Header1 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledHeader1>{ props.children }</StyledHeader1>
        </ThemeProvider>
        
    )
}

Header1.propTypes = {
    theme: PropTypes.object
}

Header1.defaultProps = {
    theme: theme
}

export default Header1

