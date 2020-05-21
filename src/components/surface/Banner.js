import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Surface from './Surface';
import theme from '../../styles/themes/default';

const StyledSurface = styled(Surface)`
    position: absolute;
    left: 0;
    ${props => props.position}: 0;
`

const Banner = (props) => 
    <StyledSurface 
        width="100%" 
        height={theme.thickness(props.thickness)} 
        {...props}
    />;

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
    thickness: 'md',
    position: 'top',
    justifyContent: 'left'
}

export default Banner;