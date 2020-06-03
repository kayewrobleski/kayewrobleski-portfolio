import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import theme from '../../../styles/themes/default'

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1rem 0 0;

    > a > svg {
        fill: ${props => props.theme.colors.text.primary};
        width: 32px;
        height: 32px;
        margin: 0 .5rem;
    }
`

Container.defaultProps = {
    theme: theme
}



const ProjectCardIconLinks = (props) => {
    const { github, launch } = props;

    return (
        <Container>
            <a target="_blank" href={github}><GitHub /></a>
            <a target="_blank" href={launch}><LaunchIcon /></a>
        </Container>

    )
}

export default ProjectCardIconLinks