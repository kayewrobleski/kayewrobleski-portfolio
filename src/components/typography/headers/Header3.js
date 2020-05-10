import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledHeader3 = styled.h3`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h3.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
`

const Header3 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledHeader3>{ props.children }</StyledHeader3>
        </ThemeProvider>
    )
}

Header3.propTypes = {
    theme: PropTypes.object
}

Header3.defaultProps = {
    theme: theme
}

export default Header3

