import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledHeader5 = styled.h5`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h5.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
`

const Header5 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledHeader5>{ props.children }</StyledHeader5>
        </ThemeProvider>
    )
}

Header5.propTypes = {
    theme: PropTypes.object
}

Header5.defaultProps = {
    theme: theme
}

export default Header5

