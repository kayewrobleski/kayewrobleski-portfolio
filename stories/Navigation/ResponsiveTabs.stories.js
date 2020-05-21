import React from 'react'
import {
    withKnobs,
    text,
    select,
    boolean
} from '@storybook/addon-knobs'

import {
    values
} from 'ramda'

import { Tab, Tabs, ResponsiveTabBar } from '../../src/components/navigation'
import * as TabKnobs from './knobs';
import * as BannerKnobs from '../Layout/banner-knobs';

export default {
    title: 'Navigation|Tabs/ResponsiveTabBar',
    decorators: [withKnobs]
}

const labels = [
    { 
        index: 0,
        value: 'Home'
    },
    {
        index: 1,
        value: 'About'
    }, 
    {
        index: 2,
        value: 'Contact'
    }
];

export const Default = () => (
    <ResponsiveTabBar labels={labels} />
);

const selectVerticalTabPosition = {
    label: 'Position',
    options: {
        Left: 'left',
        Right: 'right'
    },
    default: 'left',
}

export const WithKnobs = () => {

    const bannerProps = {
        thickness: select(...values(BannerKnobs.selectThickness), 'Banner'),
        position: select(...values(BannerKnobs.selectPosition), 'Banner'),
        justifyContent: select(...values(BannerKnobs.selectJustifyContent), 'Banner'),
        backgroundColor: text(...values(BannerKnobs.inputBackgroundColor), 'Banner')
    }

    const horizontalTabProps = {
        justifyContent: select(...values(TabKnobs.selectJustifyContent), 'Horizontal Tabs'),
        backgroundColor: text(...values(TabKnobs.inputBackgroundColor), 'Horizontal Tabs'),
        textColor: text(...values(TabKnobs.inputTextColor), 'Horizontal Tabs'),
        textTransform: select(...values(TabKnobs.selectTextTransform), 'Horizontal Tabs'),
        selected: {
            backgroundColor: text(...values(TabKnobs.inputSelectedBackgroundColor),'Horizontal Tabs'),
            borderSide: select(...values(TabKnobs.selectSelectedBorderSide),'Horizontal Tabs'),
            borderStyle: select(...values(TabKnobs.selectSelectedBorderStyle),'Horizontal Tabs'),
            borderColor: text('Selected Border Color', 'lightcoral'),
            textColor: text(...values(TabKnobs.inputSelectedTextColor))
        }
    }

    const verticalTabProps = {
        position: select(...values(selectVerticalTabPosition), 'Vertical Tabs'),
        justifyContent: select(...values(TabKnobs.selectJustifyContent), 'Vertical Tabs'),
        textColor: text(...values(TabKnobs.inputTextColor), 'Vertical Tabs'),
        textTransform: select(...values(TabKnobs.selectTextTransform), 'Vertical Tabs'),
        selected: {
            backgroundColor: text(...values(TabKnobs.inputSelectedBackgroundColor), 'Vertical Tabs'),
            borderSide: select(...values(TabKnobs.selectSelectedBorderSide), 'Vertical Tabs'),
            borderStyle: select(...values(TabKnobs.selectSelectedBorderStyle), 'Vertical Tabs'),
            borderColor: text('Selected Border Color', 'lightcoral'),
            textColor: text(...values(TabKnobs.inputSelectedTextColor), 'Vertical Tabs')
        }
    }

    return (
        <ResponsiveTabBar 
            labels={labels}
            banner={bannerProps}
            vertical={verticalTabProps}
            horizontal={horizontalTabProps}
        />
    );
}