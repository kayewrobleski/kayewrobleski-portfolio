import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes/default'
import {
    justifyContentProp,
    textTransformProp
} from '../common';

const StyledTab = styled.div`
    height: ${props => props.height};
    line-height: ${props => props.height};
    padding: 0 1rem;
	text-align: center;
    position: relative;
    
    background: transparent;
    color: darkslategray;
    transition: color .3s;

	font-family: Raleway, sans-serif;
	font-size: 1rem;
	font-weight: 600;
    
	&.selected {
		color: ${props => props.theme.colors.secondary.main};
        transition: color .3s .075s;
	}
`

const Tab = (props) => {
	const { 
		index, 
		selected, 
		label, 
		clickHandler 
    } = props;

	return <ThemeProvider theme={props.theme}>
        <StyledTab
            id={`tab-${index}`}
            className={`tab ${selected ? 'selected' : ''}`}
            onClick={clickHandler} 
            {...props} >
            { label }
        </StyledTab>
    </ThemeProvider>;
}

export const tabStyles = {
    justifyContentProp,
    textTransformProp,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    spacing: PropTypes.string,
    selectedStyles: {
        backgroundColor: PropTypes.string,
        borderStyle: PropTypes.oneOf(['solid', 'outset', 'none']),
        borderSide: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        textColor: PropTypes.string,
    }
}

Tab.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.bool,
    height: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
}

Tab.defaultProps = {
    theme: theme,
    selected: false,
    height: theme.thickness('sm')
}

export default Tab;