import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Header4 from '../typography/headers/Header4'
import theme from '../../styles/themes/default'

const Container = styled.div`
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    ${props => props.theme.breakpoints.up('md')} {
        margin: 1rem 0 0 0;
    }
    ${props => props.theme.breakpoints.down('sm')} {
        margin: 0.75rem 0;
    }    
`

const SectionSubHeader = (props) => (
    <ThemeProvider theme={props.theme}>
    <Container>
        <Header4>{ props.children }</Header4>
    </Container>
    </ThemeProvider>
)

SectionSubHeader.defaultProps = {
    theme: theme
}
    

export default SectionSubHeader