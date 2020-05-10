import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledHeader4 = styled.h4`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h4.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
`

const Header4 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledHeader4>{ props.children }</StyledHeader4>
        </ThemeProvider>
    )
}

Header4.propTypes = {
    theme: PropTypes.object
}

Header4.defaultProps = {
    theme: theme
}

export default Header4

