import React from 'react'
import styled from 'styled-components'

import TabBar from './TabBar'

const Container = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
`

export const MobileTabBar = (props) => {
    const { selected, show, children } = props;
    return (
        <Container show={show}>
            <TabBar
                selected={selected}
                orientation="vertical">
                { children }
            </TabBar>
        </Container>
    )
}

export default MobileTabBar