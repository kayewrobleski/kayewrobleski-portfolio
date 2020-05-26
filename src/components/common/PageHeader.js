import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Header1 from '../typography/headers/Header1'
import theme from '../../styles/themes/default'

const StyledPageHeader = styled.div`
    ${props => props.theme.breakpoints.up('md')} {
        margin: 2rem 0;
    }
    ${props => props.theme.breakpoints.down('sm')} {
        margin: 1.5rem 0;
    }    
`

const PageHeader = (props) => (
    <ThemeProvider theme={props.theme}>
    <StyledPageHeader>
        <Header1>{ props.children }</Header1>
    </StyledPageHeader>
    </ThemeProvider>
)

PageHeader.defaultProps = {
    theme: theme
}
    

export default PageHeader