import React from 'react'
import {
    withKnobs,
    boolean
} from '@storybook/addon-knobs'

import Tab from '../../src/components/navigation/Tab'
import TabBar from '../../src/components/navigation/TabBar'
import ResponsiveTabBar from '../../src/components/navigation/ResponsiveTabBar'
import * as Knobs from './knobs'

export default {
    title: 'Navigation|TabBar',
    decorators: [withKnobs]
}

const tabProps = [
    {
        index: 0,
        label: "Home",
    },
    {
        index: 1,
        label: "About",
    },
    {
        index: 2,
        label: "Contact",
    }
];

const Story = (props) => {
    const [selected, setSelected] = React.useState(0);

    const handleChange = (index) => {
        setSelected(index);
    }

    const tabs = tabProps.map(p => <Tab {...p} key={p.label} selected={selected==p.index} clickHandler={() => handleChange(p.index)} />);
    const orientation = props.vertical ? 'vertical' : 'horizontal';

    return <TabBar 
        selected={selected} 
        orientation={orientation}>
        { tabs }
    </TabBar>;
}

export const Default = () => <Story />;

export const WithKnobs = () => <Story vertical={boolean("Vertical", false)} />

const ResponsiveStory = (props) => {
    const [selected, setSelected] = React.useState(0);

    const handleChange = (index) => {
        setSelected(index);
    }

    const tabs = tabProps.map(p => <Tab 
        {...p} 
        key={p.label} 
        selected={selected==p.index} 
        clickHandler={() => handleChange(p.index)} />);

    const vertical = window.innerWidth < 600;

    return <ResponsiveTabBar 
        selected={selected} 
        vertical={vertical}>{ tabs }
    </ResponsiveTabBar>
}

export const Responsive = () => <ResponsiveStory />