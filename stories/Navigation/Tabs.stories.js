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

import { Tab, Tabs } from '../../src/components/navigation'
import * as Knobs from './knobs'

export default {
    title: 'Navigation|Tabs/Tabs',
    decorators: [withKnobs]
}

const labels = [
    { 
        index: 0,
        value: 'Tab 1'
    },
    {
        index: 1,
        value: 'Tab 2'
    }, 
    {
        index: 2,
        value: 'Tab 3'
    }
];

export const Default = () => (<Tabs labels={labels} />);

export const WithProps = () => (
    <Tabs 
        orientation={select(...values(Knobs.selectOrientation))} 
        labels={labels}
        justifyContent={select(...values(Knobs.selectJustifyContent))}
        backgroundColor={text(...values(Knobs.inputBackgroundColor))}
        selectedBackgroundColor={text(...values(Knobs.inputSelectedBackgroundColor))}
        selectedBorderColor={text(...values(Knobs.inputSelectedBorderColor))}
        selectedBorderStyle={select(...values(Knobs.selectSelectedBorderStyle))}
        selectedBorderSide={select(...values(Knobs.selectSelectedBorderSide))}
        textColor={text(...values(Knobs.inputTextColor))}
        selectedTextColor={text(...values(Knobs.inputSelectedTextColor))}
        textTransform={select(...values(Knobs.selectTextTransform))}
    />  
)