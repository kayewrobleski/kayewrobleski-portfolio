import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    mergeRight
} from 'ramda'

import './styles/SimpleNavHeader.css'


const StyledHeader = styled.div`
    background-color: papayawhip;
    color: lightcoral;
`

const SimpleHeader = (props) => {
    const defaultValues = {
        thickness: 'md',
        placement: 'top'
    }

    const mergedProps = mergeRight(defaultValues, props);
    let className = `thickness-${mergedProps.thickness} placement-${mergedProps.placement}`

    return (
        <StyledHeader className={className} />
    )
}

SimpleHeader.PropTypes = {
    thickness: PropTypes.string,
    placement: PropTypes.string
}

export default SimpleHeader