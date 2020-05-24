import React, { Component }from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../styles/themes/default'

import AnimatedDecorator from '../animations/AnimatedDecorator';

const StyledTabBar = styled.div`
    position: fixed;
    background: ${props => props.background || 'papayawhip'};
    z-index: 10000;
    
    &.horizontal {
        width: 100%;
        height: ${props => props.thickness || props.theme.thickness('md')};
        .tabs-container {
            display: flex;
            right: 0;
        }
    }
    
    &.vertical {
        height: 100vh;
        width: ${props => props.theme.thickness(30)};
        top: calc(${props => props.thickness});
        right: -0.5rem;
        float: right;
        .tabs-container {
            display: flex-column;
            width: 100%;
        }
    }

    .tabs-container {
        position: absolute;
        top: 0;
        // left: 0;
        align-items: center;
        justify-content: center;
    }
`

export default class TabBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = { x: 0, y: 0, width: 0 };
		this.calculateDecoratorPosition = this.calculateDecoratorPosition.bind(this);
		this.tabBar = React.createRef();
	}
	
	calculateDecoratorPosition(index) {
        const element = this.tabBar.current.querySelector(`#tab-${index}`);
        const margin = 16;
		const x = element.offsetParent.offsetLeft + element.offsetLeft - margin;
		const y = element.offsetTop - margin;
        const width = element.offsetWidth + 2 * margin;
		return { x: x, y: y, width: width };
	}
	
	componentDidUpdate(prevProps, prevState) {
		if ( prevProps != this.props ) {
			const {x, y, width }= this.calculateDecoratorPosition(this.props.selected);
            this.setState({x: x, y: y, width: width});
		}
	}
	
	componentDidMount() {
        /* Wait for position of elements to be 
           final before calcuating decorator position */
        setTimeout(() => {
            const { x, y, width } = this.calculateDecoratorPosition(this.props.selected);
		    this.setState({ x: x, y: y, width: width });
        }, 500);
	}

	render() {
		
		const { theme, orientation, children } = this.props;
        const { x, y, width } = this.state;
		
		return <ThemeProvider theme={theme}>
            <StyledTabBar 
                className={`tabbar ${orientation}`}
                 ref={this.tabBar} 
                 {...this.props}>
                <AnimatedDecorator x={x} y={y} width={width}/>
                <div className="tabs-container">{ children }</div>
            </StyledTabBar>
        </ThemeProvider>;
	}
}

TabBar.propTypes = {
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    height: PropTypes.number,
    width: PropTypes.number,
    background: PropTypes.string,
    selected: PropTypes.number,
    thickness: PropTypes.number,
}

TabBar.defaultProps = {
    theme: theme,
    orientation: 'horizontal',
    selected: 0
}