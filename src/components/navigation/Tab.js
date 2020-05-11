import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes/default'


const StyledTab = styled.div`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h4.fontSize};
    color: ${props => props.textColor};
    background-color: ${props => props.backgroundColor};
    text-align: ${props => props.justifyContent};
    text-transform: ${props => props.textTransform};
    padding: ${props => props.theme.spacing(3)};
    max-width: 7rem;
    min-width: 4rem;

    &.selected {
        background-color: ${props => props.selectedBackgroundColor};
        color: ${props => props.selectedTextColor};
        border-${props => props.selectedBorderSide}-style: ${props => props.selectedBorderStyle};
        border-color: ${props => props.selectedBorderColor};
        border-width: 0.1em;
        &.selected-border-side-${props => props.selectedBorderSide} {
            padding-${props => props.selectedBorderSide}: calc(${props => props.theme.spacing(3)} - 0.1em);
        }
    }

    
`
const className = (props) => {
    const hasBorder = props.selectedBorderStyle != 'none';
    return (
        `${hasBorder ? 'selected-border-side-' + props.selectedBorderSide : ''}`
        + ` ${props.selected ? 'selected' : ''}`
    );
}
const Tab = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <StyledTab
            className={className(props)} 
            {...props}
            >
                { props.label }
            </StyledTab>
        </ThemeProvider>      
    );
}

Tab.propTypes = {
    theme: PropTypes.object,
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    justifyContent: PropTypes.oneOf(['left', 'right', 'center']),
    backgroundColor: PropTypes.string,
    selectedBackgroundColor: PropTypes.string,
    selectedBorderStyle: PropTypes.oneOf(['solid', 'outset', 'none']),
    selectedBorderSide: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    textColor: PropTypes.string,
    selectedTextColor: PropTypes.string,
    textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
    onClick: PropTypes.func.isRequired
}

Tab.defaultProps = {
    theme: theme,
    selected: false,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    selectedBackgroundColor: 'transparent',
    selectedBorderColor: theme.colors.secondary.main,
    selectedBorderStyle: 'solid',
    selectedBorderSide: 'bottom',
    textColor: theme.colors.text.primary,
    selectedTextColor: theme.colors.text.primary,
    textTransform: 'none'
}

export default Tab