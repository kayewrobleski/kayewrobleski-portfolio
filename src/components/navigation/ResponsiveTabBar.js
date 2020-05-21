import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types';

import { Banner, SideBar } from '../surface';
import {Tabs, tabStyles} from './index';

import theme from '../../styles/themes/default'

const TabBarWrapper = styled.div`
    ${props => props.theme.breakpoints.down('xs')} {
        &.horizontal-tabs { display: none; }
    }
    ${props => props.theme.breakpoints.up('sm')} {
        &.vertical-tabs { display: none; }
    }
    .sidebar {
        ${props => props.banner.position}: ${props => props.theme.thickness(props.banner.thickness)};
    }
`;

const withTabProps = (
    Component, 
    labels,
    props, 
    orientation
) => {
    if (orientation === 'vertical') {
        return (
            <Component
                orientation="vertical"
                topBottomPadding={theme.spacing(2)}
                labels={labels}
                { ...props}
            />
        );
    }

    return (
        <Component
            orientation="horizontal"
            labels={labels}
            { ...props} 
        />
    );
}
 
const ResponsiveTabBar = (props) => (
    <ThemeProvider theme={props.theme}>
        <TabBarWrapper className="horizontal-tabs" {...props}>
            <Banner {...props.banner}>
                { withTabProps(Tabs, props.labels, props.horizontal) }
            </Banner>
        </TabBarWrapper>
        <TabBarWrapper className="vertical-tabs" {...props}>
            <Banner {...props.banner} />
            <SideBar className="sidebar" width="auto">
                { withTabProps(Tabs, props.labels, props.vertical, 'vertical') }
            </SideBar>
        </TabBarWrapper>
    </ThemeProvider>
)

ResponsiveTabBar.propTypes = {
    theme: PropTypes.object,
    banner: PropTypes.object,
    labels: PropTypes.array,
    vertical: PropTypes.shape({
        position: PropTypes.oneOf(['left', 'right']),
        ...tabStyles
    }),
    horizontal: PropTypes.shape({...tabStyles})
}

ResponsiveTabBar.defaultProps = {
    theme: theme,
    banner: {
        position: 'top',
        thickness: 'md'
    },
    vertical: {
        position: 'left'
    }
}

export default ResponsiveTabBar