import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import SectionHeader from '../../common/SectionHeader'
import SectionSubHeader from '../../common/SectionSubHeader'
import Chip from '../../data/Chip'
import theme from '../../../styles/themes/default'

export const Container = styled.div`
    margin: 2rem;
`

export const SkillsContainer = styled.div`
    ${props => props.theme.breakpoints.up('sm')} {
        display: flex;
    }

    ${props => props.theme.breakpoints.down('xs')} {
        display: flex-column;
    }
    
`

export const SkillTypeContainer = styled.div`
    display: flex-column;
    margin: 0.1rem 0.5rem;

    ${props => props.theme.breakpoints.up('md')} {
        &.frameworks {
            width: 60%
        }
        &.languages {
            width: 40%;
        }
    }

    ${props => props.theme.breakpoints.down('sm')} {
        width: 90%;
        margin: auto;
    }
`

export const ChipContainer = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const SkillsSection = (props) => (
    <ThemeProvider theme={props.theme}>
    <Container>
    <SectionHeader>Technical Skills</SectionHeader>
    <SkillsContainer>
        <SkillTypeContainer className="frameworks">
            <SectionSubHeader>Frameworks/Libraries</SectionSubHeader>
            <ChipContainer>
                <Chip>React</Chip>
                <Chip>Spring</Chip>
                <Chip>Node</Chip>
                <Chip>Angular</Chip>
                <Chip>Vue</Chip>
                <Chip>Postgres</Chip>
            </ChipContainer>
        </SkillTypeContainer>
        <SkillTypeContainer className="languages">
            <SectionSubHeader>Languages</SectionSubHeader>
            <ChipContainer>
                <Chip>Java</Chip>
                <Chip>Javascript</Chip>
                <Chip>Python</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
            </ChipContainer>
        </SkillTypeContainer>
    </SkillsContainer>
    </Container>
    </ThemeProvider>
)

SkillsSection.defaultProps = {
    theme: theme
}

export default SkillsSection