import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { easeExpOut } from 'd3-ease';
import theme from '../../styles/themes/default'

const StyledAnimatedDecorator = styled(animated.div)`
    background: lightcoral;
    border-radius: .4rem;
    height: calc(${props => props.height} - .5rem);
    width: ${props => props.width}px;
    position: relative;
    top: .25rem;
`

const AnimatedDecorator = (props) => {

	const animations = useSpring({
		transform: `translate3d(${props.x}px, ${props.y}px, 0)`,
		config: { duration: 500, easing: easeExpOut }
  })
  return <ThemeProvider theme={props.theme}>
    <StyledAnimatedDecorator 
      className="decorator" 
      style={animations} 
      {...props}>
    </StyledAnimatedDecorator>
  </ThemeProvider>
};

AnimatedDecorator.propTypes = {
}

AnimatedDecorator.defaultProps = {
  theme: theme,
  height: theme.thickness('md')
}

export default AnimatedDecorator