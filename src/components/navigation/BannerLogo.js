import React  from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.png'

const Image = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin: auto 0.1rem;
`

const BannerLogo = () => <Image src={logo} />

export default BannerLogo;