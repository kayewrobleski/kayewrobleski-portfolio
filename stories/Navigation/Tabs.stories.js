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

export const Default = () => (
    <Tabs>
        <Tab index={0} label="Tab 1" />
        <Tab index={1} label="Tab 2" />
        <Tab index={2} label="Tab 3" />
    </Tabs>
)



export const WithProps = () => (
    <Tabs orientation={select(...values(Knobs.selectOrientation))} >
        <Tab
            index={0}
            label={text(...values(Knobs.inputLabel))}
            justifyContent={select(...values(Knobs.selectJustifyContent))}
            backgroundColor={text(...values(Knobs.inputBackgroundColor))}
            selectedBackgroundColor={text(...values(Knobs.inputSelectedBackgroundColor))}
            selectedBorderStyle={select(...values(Knobs.selectSelectedBorderStyle))}
            selectedBorderSide={select(...values(Knobs.selectSelectedBorderSide))}
            textColor={text(...values(Knobs.inputTextColor))}
            selectedTextColor={text(...values(Knobs.inputSelectedTextColor))}
            textTransform={select(...values(Knobs.selectTextTransform))}
        />
        <Tab
            index={1}
            label={text(...values(Knobs.inputLabel))}
            justifyContent={select(...values(Knobs.selectJustifyContent))}
            backgroundColor={text(...values(Knobs.inputBackgroundColor))}
            selectedBackgroundColor={text(...values(Knobs.inputSelectedBackgroundColor))}
            selectedBorderStyle={select(...values(Knobs.selectSelectedBorderStyle))}
            selectedBorderSide={select(...values(Knobs.selectSelectedBorderSide))}
            textColor={text(...values(Knobs.inputTextColor))}
            selectedTextColor={text(...values(Knobs.inputSelectedTextColor))}
            textTransform={select(...values(Knobs.selectTextTransform))}
        />
        <Tab
            index={2}
            label={text(...values(Knobs.inputLabel))}
            justifyContent={select(...values(Knobs.selectJustifyContent))}
            backgroundColor={text(...values(Knobs.inputBackgroundColor))}
            selectedBackgroundColor={text(...values(Knobs.inputSelectedBackgroundColor))}
            selectedBorderStyle={select(...values(Knobs.selectSelectedBorderStyle))}
            selectedBorderSide={select(...values(Knobs.selectSelectedBorderSide))}
            textColor={text(...values(Knobs.inputTextColor))}
            selectedTextColor={text(...values(Knobs.inputSelectedTextColor))}
            textTransform={select(...values(Knobs.selectTextTransform))}
        />
    </Tabs>    
)