import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes/default'
import {
    justifyContentProp,
    textTransformProp
} from '../common';


const StyledTab = styled.div`
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    font-size: ${props => props.theme.typography.h4.fontSize};
    color: ${props => props.textColor};
    background-color: ${props => props.backgroundColor};
    text-transform: ${props => props.textTransform};
    padding: ${props => props.topBottomPadding} ${props => props.theme.spacing(3)};
    max-width: 7rem;
    min-width: 4rem;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent === 'center' ? 'center' : props.justifyContent === 'right' ? 'flex-end' : 'flex-start'};

    &.selected {
        background-color: ${props => props.selected.backgroundColor};
        color: ${props => props.selected.textColor};
        border-${props => props.selected.borderSide}-style: ${props => props.selected.borderStyle};
        border-color: ${props => props.selected.borderColor};
        border-width: 0.1rem;
        &.selected-border-side-left, &.selected-border-side-left {
            padding-${props => props.selected.borderSide}: calc(${props => props.theme.spacing(3)} - 0.1em);
        }
        &.selected-border-side-top, &.selected-border-side-bottom {
            padding-${props => props.selected.borderSide}: calc(${props => props.spacing} - 0.1em);
        }
    }
`
const className = (props) => {
    const hasBorder = props.selectedBorderStyle != 'none';
    return (
        `${hasBorder ? 'selected-border-side-' + props.selectedBorderSide : ''}`
        + ` ${props.isSelected ? 'selected' : ''}`
    );
}

const Tab = (props) => (
    <ThemeProvider theme={props.theme}>
        <StyledTab className={className(props)} {...props}>
            <div className="label">
                { props.label }
            </div> 
        </StyledTab>
    </ThemeProvider>);

export const tabStyles = {
    justifyContentProp,
    textTransformProp,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    spacing: PropTypes.string,
    selected: {
        backgroundColor: PropTypes.string,
        borderStyle: PropTypes.oneOf(['solid', 'outset', 'none']),
        borderSide: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        textColor: PropTypes.string,
    }
}

Tab.propTypes = {
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    ...PropTypes.shape(tabStyles)
}

Tab.defaultProps = {
    theme: theme,
    isSelected: false,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    selected: {
        backgroundColor: 'transparent',
        borderSide: 'bottom',
        borderStyle: 'solid'
    },
    textTransform: 'none',
    spacing: '0'
}

export default Tab