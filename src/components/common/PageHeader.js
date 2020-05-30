import React from 'react'
import styled from 'styled-components'

import theme from '../../styles/themes/default'

const PageHeader = styled.h1`
    margin: 2rem 0 0 0;
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: 50px;
    color: ${props => props.theme.colors.text.secondary};
`

PageHeader.defaultProps = {
    theme: theme
}   

export default PageHeader