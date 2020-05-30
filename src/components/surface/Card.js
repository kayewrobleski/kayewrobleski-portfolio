import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

const Card = styled.div`
    background: ${props => props.theme.colors.primary.main};
    box-shadow: 2px 2px 3px ${props => props.theme.colors.surface.shadow};
    border-radius: 12px;
    min-height: ${props => props.height || props.theme.spacing(60)};
    font-family: ${props => props.theme.typography.fontFamily.primary};  
    color: ${props => props.theme.colors.text.primary};
`

Card.defaultProps = {
    theme: theme
}

export default Card