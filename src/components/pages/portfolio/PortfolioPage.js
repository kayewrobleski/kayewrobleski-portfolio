import React from 'react'
import styled from 'styled-components'

import Page from '../Page'
import PageHeader from '../../common/PageHeader'
import PolarisProject from './Projects/PolarisProject'

const PortfolioPage = () => (
    <Page>
        <PageHeader>My Work</PageHeader>
        <PolarisProject />
    </Page>
    
)

export default PortfolioPage