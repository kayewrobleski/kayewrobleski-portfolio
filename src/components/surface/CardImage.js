import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    // position: absolute;
    // margin: 0 1rem;
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledImage = styled.img`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
`

export const CardImage = (props) => (
    <Container>
    <StyledImage {...props}/>
    </Container>
)

export default CardImage