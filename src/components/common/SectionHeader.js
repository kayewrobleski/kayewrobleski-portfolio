import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Header3 from '../typography/headers/Header3'
import theme from '../../styles/themes/default'

const Container = styled.div`
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    ${props => props.theme.breakpoints.up('md')} {
        margin: 3rem 0 0 0;
    }
    ${props => props.theme.breakpoints.down('sm')} {
        margin: 1rem 0;
    }    
`

const SectionHeader = (props) => (
    <ThemeProvider theme={props.theme}>
    <Container>
        <Header3>{ props.children }</Header3>
    </Container>
    </ThemeProvider>
)

SectionHeader.defaultProps = {
    theme: theme
}
    

export default SectionHeader