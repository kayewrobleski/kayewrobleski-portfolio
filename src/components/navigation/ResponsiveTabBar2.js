import React  from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types';

import { Banner, SideBar } from '../surface';
import TabBar from './TabBar';

import theme from '../../styles/themes/default'

function withOrientation(WrappedComponent, orientation) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        // const verticalStyle = {
        //     top: theme.thickness(props.thickness)
        // }
        

        render() {
            // const verticalStyle = {
            //     top: theme.thickness(props.thickness)
            // }

            console.log(this.props)

            return <WrappedComponent orientation={orientation} {...this.props} />
        }
    }
}

const HorizontalTabBar = withOrientation(TabBar, "horizontal");
const VerticalTabBar = withOrientation(TabBar, "vertical");

const ResponsiveTabBar2 = (props) => {
    const { theme, selected, children } = props;
    const [vertical, setVertical] = React.useState(props.vertical);
   

    React.useEffect(() => {
        function handleResize() {
            const size = window.innerWidth;
            if (size < props.theme.breakpoints.values.sm && !vertical) {
                setVertical(true);
            } else if (size >= theme.breakpoints.values.sm && vertical) {
                setVertical(false);
            }

        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })
    console.log(props.thickness);

    const verticalStyle = {
        top: theme.thickness(props.thickness)
    }

    let component = vertical 
        ? <div>
            <Banner thickness={props.thickness}/>
            <TabBar 
                thickness={theme.thickness(props.thickness)}
                selected={selected}
                orientation="vertical">
                { children }
            </TabBar>
        </div>
        : <Banner
            thickness={props.thickness}
            justifyContent="right">
            <TabBar 
                thickness={theme.thickness(props.thickness)}
                selected={selected}
                orientation="horizontal">
                { children }
            </TabBar>
        </Banner>;
    
    return <ThemeProvider theme={theme}>{ component }</ThemeProvider>
}

ResponsiveTabBar2.defaultProps = {
    theme: theme,
    vertical: false,
    thickness: 'md'
}

export default ResponsiveTabBar2