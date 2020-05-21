import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/themes/default';

const StyledSurface = styled.div`
    display: flex;
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    justify-content: ${props => props.justifyContent === 'right' ? 'flex-end' 
        : props.justifyContent === 'center' ? 'center' : 'flex-start'}; 
    background-Color: ${props => props.backgroundColor || props.theme.colors.primary.main};
`

const Surface = (props) => (
    <ThemeProvider theme={theme}>
        <StyledSurface {...props}>{ props.children }</StyledSurface>
    </ThemeProvider>
);

Surface.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    justifyContent: PropTypes.string
}

export default Surface;