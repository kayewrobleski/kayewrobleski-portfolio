import React from 'react'
import styled from 'styled-components'

import Card from '../../surface/Card'
import CardImage from '../../surface/CardImage'
import CardContent from '../../surface/CardContent'
import Body1 from '../../typography/body/Body1'
import profile from '../../../images/profile.jpeg'

const TestStyled = styled(Body1)`
    color: black;
`

const AboutMeSection = () => (
    <Card height="200">
        <CardImage src={profile} height="200" width="200"/>
        <CardContent>
            <TestStyled>
                {/* <Body1> */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Eros donec ac odio tempor. Pulvinar pellentesque habitant morbi tristique 
                    senectus et netus. Id diam maecenas ultricies mi eget mauris pharetra et. Elementum nisi quis eleifend 
                    quam adipiscing vitae proin sagittis. Varius vel pharetra vel turpis. Nulla at volutpat diam ut. Cursus 
                    metus aliquam eleifend mi in nulla posuere. Tristique sollicitudin nibh sit amet commodo. At ultrices mi 
                    tempus imperdiet nulla malesuada.
                {/* </Body1> */}
            </TestStyled>
        </CardContent>
    </Card>
)

export default AboutMeSection;