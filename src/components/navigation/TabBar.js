import React, { Component }from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../styles/themes/default'

const StyledTabBar = styled.div`
    
    background: ${props => props.theme.colors.primary.main};
    z-index: 10000;
    
    &.horizontal {
        width: inherit;
        height: inherit;
        .tabs-container {
            height: 100%;
            display: flex;
            right: 0;
        }
    }
    
    &.vertical {
        position: fixed;
        height: 100vh;
        width: ${props => props.theme.thickness(30)};
        top: ${props => props.theme.thickness('sm')};
        right: -0.5rem;
        float: right;
        .tabs-container {
            display: flex-column;
            width: 100%;
        }
    }

    .tabs-container {
        align-items: center;
        justify-content: center;
    }
`

export default class TabBar extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		
		const { theme, orientation, children } = this.props;
		
		return <ThemeProvider theme={theme}>
            <StyledTabBar 
                className={orientation}
                 {...this.props}>
                <div className="tabs-container">{ children }</div>
            </StyledTabBar>
        </ThemeProvider>;
	}
}

TabBar.propTypes = {
    theme: PropTypes.object,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    selected: PropTypes.number
}

TabBar.defaultProps = {
    theme: theme,
    orientation: 'horizontal',
    selected: 0
}