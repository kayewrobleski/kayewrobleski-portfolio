import React from 'react'

import ProjectCard from '../../src/components/pages/portfolio/ProjectCard'
import polaris from '../../src/images/polaris.png'

export default {
    title: 'Portfolio|Project Card'
}

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

export const Default = () => <ProjectCard {...props} />