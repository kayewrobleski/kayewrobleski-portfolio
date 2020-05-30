import React  from 'react'

import Banner from '../surface/Banner'
import BannerLogo from './BannerLogo'
import BannerPadding from './BannerPadding'
import BannerSpacer from './BannerSpacer'
import TabBar from './TabBar'

const WebBanner = (props) => {

    const { selected, children } = props;

    return (
        <Banner>
            <BannerPadding />
            <BannerLogo />
            <BannerSpacer />
            <TabBar 
                selected={selected}
                orientation="horizontal">
                { children }
            </TabBar>
            <BannerPadding />
        </Banner>
    )
}

export default WebBanner