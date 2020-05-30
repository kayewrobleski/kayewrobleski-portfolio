import React from 'react'
import styled from 'styled-components'

import SectionHeader from '../../common/SectionHeader'
import Chip from '../../data/Chip'

import theme from '../../../styles/themes/default'

const Container = styled.div`
    flex: 1 1 50%;
    display: flex-column
`

const Paragraph = styled.p`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    color: ${props => props.theme.colors.text.primary};
    font-size: 1rem;
`
Paragraph.defaultProps = {
    theme: theme
}

const ChipContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
`

const LeftSection = () => (
    <Container>
        <Paragraph>
            Hi, I'm Kaye Wrobleski.  I'm a full stack software engineer based 
            out of New Orleans, LA.
        </Paragraph>
        <Paragraph>
            I have over 4 years of experience in software development and project management. 
        </Paragraph>
        <Paragraph>
            After graduating from Ohio State University, I joined General 
            Electric as part of the Digital Technology Leadership Program. 
        </Paragraph>
        <Paragraph>
            Currently, I work for General Electric as a Senior Software Engineer.  In this role 
            I work primarily on things like microservices, Rest APIs, database design, and DevOps.
        </Paragraph>
        <SectionHeader>Technologies I've Used...</SectionHeader>
        <ChipContainer>
            <Chip>React</Chip>
            <Chip>Spring</Chip>
            <Chip>Node</Chip>
            <Chip>Angular</Chip>
            <Chip>Vue</Chip>
            <Chip>Postgres</Chip>
            <Chip>Java</Chip>
            <Chip>Javascript</Chip>
            <Chip>Python</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
        </ChipContainer>
    </Container>
)

export default LeftSection