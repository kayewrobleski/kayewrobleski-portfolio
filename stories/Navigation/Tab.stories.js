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

export const WithProps = () => {

    const selectedProps = {
        backgroundColor: text(...values(Knobs.inputSelectedBackgroundColor)),
        borderSide: select(...values(Knobs.selectSelectedBorderSide)),
        borderStyle: select(...values(Knobs.selectSelectedBorderStyle)),
        borderColor: text('Selected Border Color', 'lightcoral'),
        textColor: text(...values(Knobs.inputSelectedTextColor))
    }

    return <Tab
        index={0}
        label={text(...values(Knobs.inputLabel))}
        isSelected={boolean(...values(Knobs.inputSelected))}
        justifyContent={select(...values(Knobs.selectJustifyContent))}
        backgroundColor={text(...values(Knobs.inputBackgroundColor))}
        selected={selectedProps}
        textColor={text(...values(Knobs.inputTextColor))}
        textTransform={select(...values(Knobs.selectTextTransform))}
        onClick={action('clicked')}
    />
}

