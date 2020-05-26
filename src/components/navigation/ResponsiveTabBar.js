import React  from 'react'
import WebBanner from './WebBanner';
import MobileBanner from './MobileBanner';
import MobileTabBar from './MobileTabBar';

import theme from '../../styles/themes/default'

const ResponsiveTabBar = (props) => {
    const { theme, selected, children } = props;
    const [vertical, setVertical] = React.useState(props.vertical);
    const [show, setShow] = React.useState(false);
    
    const handleClick = () => {
        setShow(!show);
    }

    React.useEffect(() => {
        function handleResize() {
            const size = window.innerWidth;
            if (size < theme.breakpoints.values.sm && !vertical) {
                setVertical(true);
            } else if (size >= theme.breakpoints.values.sm && vertical) {
                setVertical(false);
            }

        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    const TabBar = () => {
        if (vertical) {
            return (
                <div>
                <MobileBanner menuClick={handleClick} />
                <MobileTabBar selected={selected} show={show}>{ children }</MobileTabBar>
                </div>
            )
        } else {
            return <WebBanner selected={selected}>{ children }</WebBanner>
        }
    }

    return <TabBar />
}

ResponsiveTabBar.defaultProps = {
    theme: theme,
    vertical: false
}

export default ResponsiveTabBar