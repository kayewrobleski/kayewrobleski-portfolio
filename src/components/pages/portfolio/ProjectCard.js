import React from 'react'
import styled from 'styled-components'

import ProjectCardContent from './ProjectCardContent'
import ProjectCardImage from './ProjectCardImage'
import ProjectCardTitle from './ProjectCardTitle'
import ProjectCardDescription from './ProjectCardDescription'
import ProjectCardTags from './ProjectCardTags'
import ProjectCardIconLinks from './ProjectCardIconLinks'

import theme from '../../../styles/themes/default'

import polaris from '../../../images/polaris.png'


const Container = styled.div`
    display: flex;
    width: fit-content;
    margin: 2rem auto;

    ${props => props.theme.breakpoints.up('md')} {
        align-items: center;
    }

    ${props => props.theme.breakpoints.down('sm')} {
        flex-direction: column;
        justify-items: center;
        max-width: 300px;
        width: 90%;
    }
`

Container.defaultProps = {
    theme: theme
}


const ProjectCard = (props) => {

    const {
        image, 
        title, 
        description,
        tags,
        gitHubUrl,
        launchUrl
    } = props;

    return (
        <Container>
            <ProjectCardImage image={image}/>
            <ProjectCardContent>
                <ProjectCardIconLinks 
                    github={gitHubUrl}
                    launch={launchUrl}
                />
                <ProjectCardTitle value={title} />
                <ProjectCardDescription value={description} />
                <ProjectCardTags tags={tags} />
            </ProjectCardContent>
        </Container>
    )
}

export default ProjectCard