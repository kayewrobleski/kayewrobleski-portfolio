import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledBody2= styled.p`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-size: ${props => props.theme.typography.body2.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.normal};
    color: ${props => props.theme.colors.text.secondary};
`

const Body2 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledBody2>{ props.children }</StyledBody2>
        </ThemeProvider>
    )
}

Body2.propTypes = {
    theme: PropTypes.object
}

Body2.defaultProps = {
    theme: theme
}

export default Body2

