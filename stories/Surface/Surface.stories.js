import React from 'react'
import {
    withKnobs,
    select,
    text
} from '@storybook/addon-knobs';

import {
    values
} from 'ramda';

import { Surface } from '../../src/components/surface';

export default {
    title: 'Surface|Surface',
    decorators: [withKnobs]
}

export const Default = () => <Surface><h1>Child of Surface</h1></Surface>;

const selectJustifyContent = {
    label: 'Justify Content',
    options: {
        Left: 'left',
        Right: 'right',
        Center: 'center'
    },
    default: 'left',
}

export const WithProps = () => (
    <Surface 
        height={text('Height', 'auto')}
        width={text('Width', 'auto')}
        justifyContent={select(...values(selectJustifyContent))}
    >
        <h1>Child of Surface</h1>
    </Surface>
);