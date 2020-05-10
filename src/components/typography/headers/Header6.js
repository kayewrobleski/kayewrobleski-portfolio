import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledHeader6 = styled.h6`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h6.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
`

const Header6 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledHeader6>{ props.children }</StyledHeader6>
        </ThemeProvider>
    )
}

Header6.propTypes = {
    theme: PropTypes.object
}

Header6.defaultProps = {
    theme: theme
}

export default Header6

