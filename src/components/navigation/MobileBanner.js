import React  from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/icons/Menu'

import Banner from '../surface/Banner'
import BannerLogo from './BannerLogo'
import BannerPadding from './BannerPadding'
import BannerSpacer from './BannerSpacer'

import theme from '../../styles/themes/default'

const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
    > svg {
        fill: ${props => props.color};
    }
`

const MenuButton = ({onClick}) => {
    const iconColor = theme.colors.text.primary;

    return (
        <Button onClick={onClick} color={iconColor}>
            <Menu />
        </Button>
    )
}

const MobileBanner = ({menuClick}) => (
    <Banner>
        <BannerPadding />
        <BannerLogo />
        <BannerSpacer />
        <MenuButton onClick={menuClick}/>
        <BannerPadding />
    </Banner>
)

export default MobileBanner