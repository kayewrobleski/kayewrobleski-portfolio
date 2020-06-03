import React from 'react'
import styled from 'styled-components'

import theme from '../../styles/themes/default' 

const Tag = styled.div`
    margin: 0 0.3rem 0.3rem 0;
    background: ${props => props.theme.colors.primary.dark};
    color: ${props => props.theme.colors.text.primary};
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: .7rem;
    width: fit-content;
    padding: .25rem .3rem;
    border-radius: .45rem;
`

Tag.defaultProps = {
    theme: theme
}

export default Tag
