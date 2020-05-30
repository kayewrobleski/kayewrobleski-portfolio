import React from 'react';
import styled from 'styled-components'

import Page from '../Page'
import PageHeader from '../../common/PageHeader'
import LeftSection from './LeftSection'
import theme from '../../../styles/themes/default'
import profile from '../../../images/profile.jpeg'

const Container = styled.div`
    ${props => props.theme.breakpoints.up('sm')} {
        display: flex;
    }
    ${props => props.theme.breakpoints.up('xs')} {
        display: flex-column;
    }
`
Container.defaultProps = {
    theme: theme
}

const Image = styled.img`
    margin: 1rem;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    border-radius: 8px;
`

const Right = styled.div`
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
`

const AboutPage = () => (
    <Page>
        <PageHeader>About</PageHeader>
        <Container>
            <LeftSection />
            <Right>
                <Image src={profile} height="200" width="200"/>
            </Right>
        </Container>
    </Page>
)

export default AboutPage