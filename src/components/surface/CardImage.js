import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledImage = styled.img`
    border-style: solid;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    
    // align-self: center;
    // justify-self: center;
`

export const CardImage = (props) => (
    <Container>
    <StyledImage {...props}/>
    </Container>
)

export default CardImage