import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Banner from '../layout/Banner'
import {Tab, Tabs} from './index'

const StyledBanner = styled(Banner)`
`

const StyledTabs = styled(Tabs)`
`

const TabsWrapper = (props) => (
    <Tabs {...props}>
        {props.children}
    </Tabs>
)

const ResponsiveTabs = ({bannerProps, tabsProps, tabs}) => {
    return (
        <Banner {...bannerProps}>
            <TabsWrapper {...tabsProps}>
                { tabs.map(tab => <Tab index={tab.index} label={tab.label} {...tabsProps} />) }
            </TabsWrapper>
        </Banner>
    )
}

ResponsiveTabs.propTypes = {
    bannerProps: PropTypes.object,
    tabsProps: PropTypes.object,
    tabProps: PropTypes.object,
    tabs: PropTypes.array
}

export default ResponsiveTabs