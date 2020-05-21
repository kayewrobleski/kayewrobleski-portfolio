import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { Tab, tabStyles } from './index';

const StyledTabs = styled.div`
    &.horizontal {
        display: flex;
    }

    &.vertical {
        display: flex-column;
    }
`

const className = (props) => {
    return (
        `${props.orientation}`
    );
}



const Tabs = (props) => {

    const [selected, setSelected] = React.useState(0);

    // const tabs = props.tabs;

    const handleSelected = (index) => {
        setSelected(index);
    }

    const tabWithProps = (label, props) => (
        <Tab 
            key={label.index} 
            index={label.index}
            label={label.value} 
            onClick={() => handleSelected(label.index)} 
            isSelected={selected==label.index}
            {...props}
        />
    );

    return (
        <StyledTabs className={className(props)}>
            { props.labels.map((label) => tabWithProps(label, props)) }
        </StyledTabs>
    )
}

Tabs.propTypes = {
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    labels: PropTypes.arrayOf(PropTypes.shape({ 
        index: PropTypes.number, 
        value: PropTypes.string
    })),
    ...PropTypes.objectOf(tabStyles),
}

Tabs.defaultProps = {
    orientation: 'horizontal'
}

export default Tabs;