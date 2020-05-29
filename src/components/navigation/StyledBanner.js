import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Banner  from '../surface/Banner'
import theme from '../../styles/themes/default'

const BannerWithBoxShadow = styled(Banner)`
    box-shadow: 0px 3px 5px ${props => props.theme.colors.primary.dark};
`

const StyledBanner = (props) => (
    <ThemeProvider theme={props.theme}>
    <BannerWithBoxShadow  {...props}/>
    </ThemeProvider>
)

StyledBanner.defaultProps = {
    theme: theme
}

export default StyledBanner