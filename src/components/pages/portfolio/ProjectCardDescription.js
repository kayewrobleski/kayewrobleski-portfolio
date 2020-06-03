import React from 'react'
import styled from 'styled-components'

import theme from '../../../styles/themes/default'

const Container = styled.p`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-size: .8rem;
    color: ${props => props.theme.colors.text.primary};
    margin: 1rem;
`

Container.defaultProps = {
    theme: theme
}

const ProjectCardDescription = (props) => {
    const { value } = props
    return <Container>{ value }</Container>
}

export default ProjectCardDescription