import React from 'react'
import styled from 'styled-components'

import Banner from './Banner'
// import '../../styles/breakpoints.scss'

import './styles/ResponsiveBanner.scss'

// const BannerPadding = styled.div`
    

    
// `

const ResponsiveBanner = (props) => {
    return (
        <Banner {...props}>
            <div className="kwBanner-padding" />
            { props.children }
            <div className="kwBanner-padding"/>
        </Banner>
    )
}

export default ResponsiveBanner