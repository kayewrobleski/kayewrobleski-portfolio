import React from 'react'
import styled from 'styled-components'

import Page from '../Page'
import PageHeader from '../../common/PageHeader'
import theme from '../../../styles/themes/default'

const Container = styled.div`
    text-align: center;
    height: 80%;
    display: flex-column;
    justify-content: center;
    flex: 1 1 auto;
    margin: 7rem auto;

    ${props => props.theme.breakpoints.up('sm')} {
        width: 60%;
    }
    ${props => props.theme.breakpoints.down('xs')} {
        width: 95%;
    }
`
Container.defaultProps = {
    theme: theme
}

const Paragraph = styled.p`
    font-family: ${props => props.theme.typography.fontFamily.primary};
    color: ${props => props.theme.colors.text.primary};
    font-size: 1rem;
`
Paragraph.defaultProps = {
    theme: theme
}

const EmailLink = styled.a`
    background: transparent;
    color: ${props => props.theme.colors.secondary.main};
    border: 2px solid ${props => props.theme.colors.secondary.main};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    outline: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
`
EmailLink.defaultProps = {
    theme: theme
}

const ContactPage = () => {
   
    const href = "mailto:kayewrobleski94@gmail.com"
    
    return (
        <Page>
            <Container>
                <PageHeader>Contact Me</PageHeader>
                <Paragraph>
                    I'm currently looking for new opportunities.  If you are 
                    interested in working together or just want to chat, send 
                    me a message.  I look forward to connecting with you!
                </Paragraph>
                <div style={{margin: "3rem"}}>
                    <EmailLink href={href} target="_blank">Email Me</EmailLink>
                </div>
            </Container>  
        </Page>
    ) 
}

export default ContactPage