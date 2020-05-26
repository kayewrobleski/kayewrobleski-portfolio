import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import CardImage from './CardImage'
import profile from '../../images/profile.jpeg'
import theme from '../../styles/themes/default'

const Container = styled.div`
    
    border-style: solid;
    min-height: ${props => props.theme.spacing(60)};
    min-width: ${props => props.theme.spacing(50)};
    ${props => props.theme.breakpoints.up('md')} {
        max-width: 60%;
        display: flex;
        max-height: ${props => props.theme.spacing(60)};
    }
    ${props => props.theme.breakpoints.down('sm')} {
        max-width: 90%;
        display: flex-column;
        max-height: fit-content;
    }
    overflow-y: scroll;
    
`

const Description = styled.div`
    flex-grow: 1;
    border-style: solid;
`

const Card = (props) => (
    <ThemeProvider theme={props.theme}>
        <Container>
            <CardImage src={profile} height="200" width="200"/>
            <Description />
        </Container>
    </ThemeProvider>
)

Card.defaultProps = {
    theme: theme
}

export default Card;