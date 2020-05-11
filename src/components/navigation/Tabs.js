import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Tab from './Tab'

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

    const [selected, setSelected] = React.useState(null);

    const handleSelected = (index) => {
        console.log(index)
        setSelected(index)
    }

    /* Clone tab components with selected and onClick props */
    const tabsWithProps = Children.map(props.children, child => cloneElement(
        child, 
        {
            selected: child.props.index == selected,
            onClick:() => handleSelected(child.props.index)
        })
    );

    return (
        <StyledTabs className={className(props)}>
            { tabsWithProps }
        </StyledTabs>
    )
}

Tabs.propTypes = {
    initalState: PropTypes.number,
    orientation: PropTypes.oneOf(['vertical', 'horizontal'])
}

Tabs.defaultProps = {
    orientation: 'horizontal'
}

export default Tabs