import React from 'react'
import {
    withKnobs,
    select,
    text
} from '@storybook/addon-knobs';

import {
    values
} from 'ramda';

import { SideBar } from '../../src/components/surface';

export default {
    title: 'Layout|Side Bar',
    decorators: [withKnobs]
}

export const Default = () => <SideBar>Child of Side Bar</SideBar>;

const selectPosition = {
    label: 'Position',
    options : {
        Left: 'left',
        Right: 'right',
    },
    default: 'left'
}

const selectThickness = {
    label: 'Thickness',
    options : {
        XSmall: 'xs',
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
        XLarge: 'xl'
    },
    default: 'lg'
}

const selectJustifyContent = {
    label: 'Justify Content',
    options: {
        Left: 'left',
        Right: 'right',
        Center: 'center'
    },
    default: 'left',
}

export const WithProps = () => 
    <SideBar 
        position={select(...values(selectPosition))}
        thickness={select(...values(selectThickness))}
        justifyContent={select(...values(selectJustifyContent))}
    >
        Child
    </SideBar>