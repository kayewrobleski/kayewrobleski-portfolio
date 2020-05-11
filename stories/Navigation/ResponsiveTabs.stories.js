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

import { Tab, Tabs, ResponsiveTabs } from '../../src/components/navigation'
import * as Knobs from './knobs'

export default {
    title: 'Navigation|Tabs/ResponsiveTabs',
    decorators: [withKnobs]
}

const bannerProps = {}
const tabProps = {}

const tabs = [
    {
        index: 0,
        label: 'Home'
    },
    {
        index: 1,
        label: 'About'
    },
    {
        index: 2,
        label: 'Contact'
    }
];

export const ResponsiveTabBar = () => (
    <ResponsiveTabs bannerProps={bannerProps} tabsProps={tabProps} tabs={tabs} />
)
