import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../common/PageHeader'

import Page from '../Page'
import theme from '../../../styles/themes/default'

const Container = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
    margin: 7rem auto;
`

const Name = styled(PageHeader)`
    font-weight: bold;
    font-size: 3.0rem;
    margin-bottom: 1.15rem;
    margin-top: 1rem;
`

const Description = styled.h3`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-weight: 300;
    color: ${props => props.theme.colors.text.secondary};
    text-transform: uppercase;
`
Description.defaultProps = {
    theme: theme
}

const Divider = styled.hr`
    width: 300px;
    border: 2px solid ${props => props.theme.colors.secondary.main};
    margin: calc(1.15rem - 2px) auto;
    background-color: transparent;
`
Divider.defaultProps = {
    theme: theme
}

const HomePage = () => (
    <Page>
        <Container>
        {/* <div> */}
            <Name>Kaye Wrobleski</Name>
            <Divider />
            <Description>Full Stack Software Engineer</Description>
        {/* </div> */}
        </Container>
    </Page>
)

export default HomePage