import React from 'react'
import {
    withKnobs,
    select,
    text
} from '@storybook/addon-knobs'

import Banner from '../../src/components/layout/Banner'

import {
    values
} from 'ramda'

export default {
    title: 'Layout|Banner',
    decorators: [withKnobs]
}

export const Default = () => <Banner />;

const selectThickness = {
    label: 'Thickness',
    options: {
        XLarge: 'xl',
        Large: 'lg',
        Medium: 'md',
        Small: 'sm',
        XSmall: 'xs',
        'Fit Content': 'fit'
    },
    default: 'md'
}

const selectPosition = {
    label: 'Position',
    options: {
        Top: 'top',
        Bottom: 'bottom'
    },
    default: 'top'
}

const selectJustifyContent = {
    label: 'Justify Content',
    options: {
        Left: 'left',
        Right: 'right',
        Center: 'center'
    },
    default: 'left'
}

const inputBackgroundColor = {
    label: 'Background Color',
    default: 'papayawhip'
}

export const WithProps = () =>  {
    const props = {
        thickness: select(...values(selectThickness)),
        position: select(...values(selectPosition)),
        justifyContent: select(...values(selectJustifyContent)),
        backgroundColor: text(...values(inputBackgroundColor))
    }

    return (
        <Banner {...props}>
            <h3>Child 1...</h3>
            <h3>Child 2...</h3>
        </Banner>
    )
}
    
