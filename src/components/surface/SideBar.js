import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Surface from './Surface';
import theme from '../../styles/themes/default';

const StyledSurface = styled(Surface)`
    position: absolute;
    top: 0;
    ${props => props.position}: 0;
`

const SideBar = (props) => 
    <StyledSurface 
        width={theme.thickness(props.thickness)}
        height="100%" 
        {...props}
    />;

SideBar.propTypes = {
    position: PropTypes.oneOf(['left', 'right']),
    thickness: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    justifyContent: PropTypes.oneOf(['left', 'right', 'center'])
}

SideBar.defaultProps = {
    position: 'left',
    thickness: 'lg',
    justifyContent: 'left'
}

export default SideBar;