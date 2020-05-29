import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types';

import theme from '../styles/themes/default'

const StyledPage = styled.div`
    position: absolute;
    width: inherit;

    top: ${props => props.theme.thickness('sm')};
    display: flex-column;
    height: calc(100% - ${props => props.theme.thickness('sm')});
    overflow-x: hidden;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`

const Page = (props) => <ThemeProvider theme={props.theme}>
    <StyledPage>{ props.children }</StyledPage>
</ThemeProvider>

Page.propTypes = {
    theme: PropTypes.object
}

Page.defaultProps = {
    theme: theme
}

export default Page