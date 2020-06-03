import React from 'react'
import styled from 'styled-components'

import theme from '../../../styles/themes/default'

const Container = styled.h3`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    color: ${props => props.theme.colors.text.secondary};

    ${props => props.theme.breakpoints.up('sm')} {
        margin: 0 1rem 1rem 1rem;
    }
    ${props => props.theme.breakpoints.down('xs')} {
        margin: 1.5rem 1rem 1rem 1rem;
    }
`

Container.defaultProps = {
    theme: theme
}

const ProjectCardTitle = (props) => {
    const { value } = props;
    return <Container>{ value }</Container>
}

export default ProjectCardTitle