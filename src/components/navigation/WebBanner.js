import React  from 'react'
import styled from 'styled-components'

import Banner from '../surface/Banner'
import BannerLogo from './BannerLogo'
import BannerPadding from './BannerPadding'
import BannerSpacer from './BannerSpacer'
import TabBar from './TabBar'


const StyledBanner = styled(Banner)`
    justify-content: center;
`

const ContentWrapper = styled.div`
    display: flex;
    max-width: 1080px;
    flex: 1 1 1080px;
    padding: 1rem;
`

const WebBanner = (props) => {

    const { selected, children } = props;

    return (
        <StyledBanner>
            <ContentWrapper>
            <BannerLogo />
            <BannerSpacer />
            <TabBar 
                selected={selected}
                orientation="horizontal">
                { children }
            </TabBar>
            </ContentWrapper>
        </StyledBanner>
    )
}

export default WebBanner