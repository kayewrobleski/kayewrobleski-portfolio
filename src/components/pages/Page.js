import React from 'react';
import styled from 'styled-components'

import theme from '../../styles/themes/default'

const Page = styled.div`
    max-width: 1080px;
    margin: 3rem auto;
    width: inherit;
    top: ${props => props.theme.thickness('sm')};
    display: flex-column;
    min-height: calc(100% - ${props => props.theme.thickness('sm')});
    overflow-x: hidden;
    
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`

Page.defaultProps = {
    theme: theme
}

export default Page