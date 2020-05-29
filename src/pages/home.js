import React from 'react'
import styled from 'styled-components'

import "typeface-open-sans"
import "typeface-raleway"

import Page from './Page'

const Container = styled.div`
    text-align: center;
    border-radius: 4px;
    color: #475665;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    // align-items: center;
    position: absolute;
    top: 30%;
    flex: 1 1 auto;
`

const Name = styled.h1`
    font-family: Raleway, sans-serif;
    font-weight: bold;
    font-size: 3.0rem;
    margin-bottom: 1.15rem;
    margin-top: 1rem;
`

const Description = styled.h3`
    font-family: Open Sans, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
`

const Divider = styled.hr`
    width: 300px;
    border-top: 2px solid #F08080;
    margin: calc(1.15rem - 2px) auto;
    background-color: transparent;
`

const HomePage = () => (
    <Page>
        <Container>
        <div>
            <Name>Kaye Wrobleski</Name>
            <Divider />
            <Description>Full Stack Software Engineer</Description>
        </div>
        </Container>
    </Page>
)

export default HomePage