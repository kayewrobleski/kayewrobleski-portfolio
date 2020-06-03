import React from 'react'
import styled from 'styled-components'

import ProjectCard from '../ProjectCard'
import polaris from '../../../../images/polaris.png'
import theme from '../../../../styles/themes/default'

const Container = styled.div`
    display: flex;

    ${props => props.theme.breakpoints.up('md')} {
        align-items: center;
    }

    ${props => props.theme.breakpoints.down('sm')} {
        flex-direction: column;
        justify-items: center;
        width: 90%;
        margin: auto;
    }
`

Container.defaultProps = {
    theme: theme
}


const PolarisProject = () => {
    const props = {
        title: "Polaris Property Holdings",
        description: `This is a company website for the startup real estate 
        firm, Polaris Property Holdings LLC. I taught myself React through 
        developing this website.`,
        tags: ["React", "Material UI", "S3"],
        image: polaris,
        gitHubUrl: 'https://github.com/kayewrobleski/polaris-property-holdings',
        launchUrl: 'https://polarispropertyholdings.com/'
    }

    return <ProjectCard {...props} />
}

export default PolarisProject