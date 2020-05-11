import React from 'react'
import { 
    withKnobs,
    boolean,
    text,
    select
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import * as Knobs from './knobs'

import {
    values
} from 'ramda'

import Tab from '../../src/components/navigation/Tab'

export default {
    title: 'Navigation|Tabs/Tab',
    decorators: [withKnobs]
}

export const Default = () => (
    <Tab 
        index={0}
        onClick={action('clicked')} 
        label="Default Tab"
    />
);

export const WithProps = () => (

    <Tab
        index={0}
        label={text(...values(Knobs.inputLabel))}
        selected={boolean(...values(Knobs.inputSelected))}
        justifyContent={select(...values(Knobs.selectJustifyContent))}
        backgroundColor={text(...values(Knobs.inputBackgroundColor))}
        selectedBackgroundColor={text(...values(Knobs.inputSelectedBackgroundColor))}
        selectedBorderStyle={select(...values(Knobs.selectSelectedBorderStyle))}
        selectedBorderSide={select(...values(Knobs.selectSelectedBorderSide))}
        textColor={text(...values(Knobs.inputTextColor))}
        selectedTextColor={text(...values(Knobs.inputSelectedTextColor))}
        textTransform={select(...values(Knobs.selectTextTransform))}
        onClick={action('clicked')}
    />
)

