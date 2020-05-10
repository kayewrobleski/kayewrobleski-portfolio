import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './styles/Banner.scss'


const StyledBanner = styled.div`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
`

const classPrefix = 'kwBanner'

const Banner = (props) => {
    console.log(props);
    
    let className = `${props.className}`
        + ` ${classPrefix} ${classPrefix}-thickness-${props.thickness}`
        + ` ${classPrefix}-position-${props.position}`
        + ` ${classPrefix}-justify-${props.justifyContent}`;
    
    console.log(className);

    return (
        <StyledBanner 
            className={className}
            thickness={props.thickness}
            position={props.position}
            justifyContent={props.justifyContent}
            backgroundColor={props.backgroundColor}
            textColor={props.textColor}
        >
            { props.children }
        </StyledBanner>
    )      
}

Banner.propTypes = {
    thickness: PropTypes.oneOfType([
        PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'fit']),
        PropTypes.number
    ]),
    position: PropTypes.oneOf(['top', 'bottom']),
    justifyContent: PropTypes.oneOf(['left', 'right', 'center']),
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
}

Banner.defaultProps = {
    thickness: 'md',
    position: 'top',
    justifyContent: 'left',
    backgroundColor: 'papayawhip',
    textColor: 'lightcoral'
}

export default Banner