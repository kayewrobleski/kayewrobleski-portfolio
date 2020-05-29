import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../styles/themes/default'

const StyledBody1 = styled.div`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-size: ${props => props.theme.typography.body1.fontSize};
    font-weight: ${props => props.theme.typography.fontWeight.normal};
    color: ${props => props.theme.colors.text.primary};
    margin: 0;
`

const Body1 = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledBody1>{ props.children }</StyledBody1>
        </ThemeProvider>
    )
}

Body1.propTypes = {
    theme: PropTypes.object
}

Body1.defaultProps = {
    theme: theme
}

export default Body1

