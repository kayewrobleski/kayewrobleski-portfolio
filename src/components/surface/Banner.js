import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../../styles/themes/default';

const StyledBanner = styled.div`
    position: fixed;
    ${props => props.position}: 0;
    left: 0;
    width: 100%;
    height: ${props => props.theme.thickness(props.thickness)};
    z-index: 10000;
    display: flex;
    background: ${props => props.theme.colors.primary.main};
    padding: 0.5rem 0 0 0;

    .content {
        flex-grow: 1;
        display: flex;
    }
`

const Padding = styled.div`
    ${props => props.theme.breakpoints.up('md')} {
        width: 15%;
    }
    ${props => props.theme.breakpoints.down('sm')} {
        width: 0;
    }
`

const Banner = (props) => <ThemeProvider theme={props.theme}>
        <StyledBanner {...props}>
            <Padding />
            <div className="content">{props.children}</div>
            <Padding />
        </StyledBanner>
    </ThemeProvider>

Banner.propTypes = {
    thickness: PropTypes.oneOfType([
        PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
        PropTypes.number
    ]),
    position: PropTypes.oneOf(['top', 'bottom']),
    justifyContent: PropTypes.oneOf(['left', 'right', 'center']),
    backgroundColor: PropTypes.string
}

Banner.defaultProps = {
    theme: theme,
    thickness: 'sm',
    position: 'top',
    justifyContent: 'left'
}

export default Banner;