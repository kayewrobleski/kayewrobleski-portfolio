import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import CardImage from './CardImage'
import CardContent from './CardContent'
import Body1 from '../typography/body/Body1'
import profile from '../../images/profile.jpeg'
import theme from '../../styles/themes/default'

const Container = styled.div`
    
    // background: ${props => props.theme.colors.primary.light};
    min-height: ${props => props.height || props.theme.spacing(60)};
    ${props => props.theme.breakpoints.up('md')} {
        display: flex;
        max-height: ${props => props.height || props.theme.spacing(60)};
    }
    ${props => props.theme.breakpoints.down('sm')} {
        max-width: 90%;
        display: flex-column;
        max-height: fit-content;
        margin: 0 auto;
    }
    overflow-y: scroll;
    
`

const Card = (props) => (
    <ThemeProvider theme={props.theme}>
        <Container height={props.height ? `${props.height}px` : null}>
            { props.children }
        </Container>
    </ThemeProvider>
)

Card.defaultProps = {
    theme: theme
}

export default Card