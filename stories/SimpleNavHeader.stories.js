import React from 'react'
import {
    withKnobs,
    select
} from '@storybook/addon-knobs'

import SimpleHeader from '../src/components/SimpleNavHeader'

export default {
    title: 'Layout|Navigation/Simple Header',
    decorators: [withKnobs]
}

export const Default = () => <SimpleHeader />;


const label = "Thickness"
const options = {
    XLarge: 'xl',
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
    XSmall: 'xs'
}
const defaultValue = 'md'
const groupId = 'GROUP-ID1';

export const WithProps = () =>  {
    let thicknessSelect = select(label, options, defaultValue, groupId)
    const props = {
        thickness: thicknessSelect
    }

    return (
        <SimpleHeader {...props} />
    )
}
    
