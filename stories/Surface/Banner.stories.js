import React from 'react'
import {
    withKnobs,
    select,
    text
} from '@storybook/addon-knobs';

import { Banner } from '../../src/components/surface';
import * as Knobs from './banner-knobs';

import {
    values
} from 'ramda';

export default {
    title: 'Surface|Banner',
    decorators: [withKnobs]
}

export const Default = () => <Banner />;

export const WithProps = () =>  {
    const props = {
        thickness: select(...values(Knobs.selectThickness)),
        position: select(...values(Knobs.selectPosition)),
        justifyContent: select(...values(Knobs.selectJustifyContent)),
        backgroundColor: text(...values(Knobs.inputBackgroundColor))
    }

    return (
        <Banner {...props}>
            <h3>Child 1...</h3>
            <h3>Child 2...</h3>
        </Banner>
    )
}
    
