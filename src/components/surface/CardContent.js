import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes/default'

const Container = styled.div`
    flex-grow: 1;
    padding: 0 1rem;
    color: ${props => props.theme.colors.text.primary};
`

const CardContent = (props) => (
    <ThemeProvider theme={props.theme}>
        <Container>{ props.children }</Container>
    </ThemeProvider>
)

CardContent.defaultProps = {
    theme: theme
}

export default CardContent