import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledHeader2 = styled.h2`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h2.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
`

const Header2 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledHeader2>{ props.children }</StyledHeader2>
        </ThemeProvider>
    )
}

Header2.propTypes = {
    theme: PropTypes.object
}

Header2.defaultProps = {
    theme: theme
}

export default Header2

