import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import './styles/Banner.scss'
import theme from '../../styles/themes/default'


const StyledBanner = styled.div`
    background-color: ${props => props.backgroundColor || props.theme.colors.primary.main};

    > * {
        margin: auto ${props => props.theme.spacing(2)};
    }
`

const classPrefix = 'kwBanner'

const Banner = (props) => {
    
    let className = `${props.className}`
        + ` ${classPrefix} ${classPrefix}-thickness-${props.thickness}`
        + ` ${classPrefix}-position-${props.position}`
        + ` ${classPrefix}-justify-${props.justifyContent}`;

    return (
        <ThemeProvider theme={props.theme}>
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
        </ThemeProvider>   
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
    textColor: PropTypes.string,
    theme: PropTypes.object
}

Banner.defaultProps = {
    thickness: 'md',
    position: 'top',
    justifyContent: 'left',
    theme: theme
}

export default Banner