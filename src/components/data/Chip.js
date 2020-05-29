import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Body1 from '../typography/body/Body1'

import theme from '../../styles/themes/default'

const Container = styled.div`
    margin: 0.5rem;
    background: ${props => props.theme.colors.secondary.main};
    width: fit-content;
    padding: 0.5rem 1.2rem;
    border-radius: 1rem;

    p {
        color: ${props => props.theme.colors.common.white};
    }
    
`


const Chip = (props) => (
    <ThemeProvider theme={props.theme}>
        <Container>
            <Body1 className="text">{ props.children }</Body1>
        </Container>
    </ThemeProvider>
)

Chip.defaultProps = {
    theme: theme
}

export default Chip
