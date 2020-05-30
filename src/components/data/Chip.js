import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../../styles/themes/default' 

const Chip = styled.div`
    margin: 0 0.3rem 0.3rem 0;
    background: ${props => props.theme.colors.secondary.main};
    color: ${props => props.theme.colors.text.secondary};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-size: 0.9rem;
    width: fit-content;
    padding: 0.25rem 1.25rem;
    border-radius: 1rem;
`

Chip.defaultProps = {
    theme: theme
}

export default Chip
