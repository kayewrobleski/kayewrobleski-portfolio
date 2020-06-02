import React  from 'react'
import styled from 'styled-components'
import WebBanner from './WebBanner'
import MobileBanner from './MobileBanner'
import MobileTabBar from './MobileTabBar'

import theme from '../../styles/themes/default'

const Wrapper = styled.div`
    &.web-tabbar {
        ${props => props.theme.breakpoints.down('xs')} {
            display: none;
        }
    }

    &.mobile-tabbar {
        ${props => props.theme.breakpoints.up('sm')} {
            display: none;
        }
    }
`

Wrapper.defaultProps = {
    theme: theme
}

const ResponsiveTabBar = (props) => {
    const { theme, selected, children } = props;
    const [show, setShow] = React.useState(false);
    
    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <Wrapper className="mobile-tabbar">
                <MobileBanner menuClick={handleClick} />
                <MobileTabBar selected={selected} show={show}>{ children }</MobileTabBar>
            </Wrapper>
            <Wrapper className="web-tabbar">
                <WebBanner selected={selected}>{ children }</WebBanner>
            </Wrapper>
        </div>
    )
}

ResponsiveTabBar.defaultProps = {
    theme: theme,
    vertical: false
}

export default ResponsiveTabBar