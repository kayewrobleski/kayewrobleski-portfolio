import React  from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/icons/Menu'

import StyledBanner from './StyledBanner'
import BannerLogo from './BannerLogo'
import BannerPadding from './BannerPadding'
import BannerSpacer from './BannerSpacer'
import TabBar from './TabBar'

const WebBanner = (props) => {

    const { selected, children } = props;

    return (
        <StyledBanner>
            <BannerPadding />
            <BannerLogo />
            <BannerSpacer />
            <TabBar 
                selected={selected}
                orientation="horizontal">
                { children }
            </TabBar>
            <BannerPadding />
        </StyledBanner>
    )
}

export default WebBanner