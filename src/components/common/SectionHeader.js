import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

const SectionHeader = styled.h3`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    color: ${props => props.theme.colors.text.secondary};
`

SectionHeader.defaultProps = {
    theme: theme
}
    

export default SectionHeader