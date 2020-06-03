import React from 'react'
import styled from 'styled-components'

import theme from '../../../styles/themes/default'

const ProjectCardContent = styled.div`
    background: ${props => props.theme.colors.primary.light};

    ${props => props.theme.breakpoints.up('md')} {
        max-width: 500px;
        min-width: 300px;
        height: 200px;
        position: relative;
        right: 2%;
        overflow-y: scroll;
    }

    ${props => props.theme.breakpoints.down('sm')} {
        height: fit-content;
        margin: auto;
    }
`

ProjectCardContent.defaultProps = {
    theme: theme
}

export default ProjectCardContent