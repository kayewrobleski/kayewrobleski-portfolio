import React from 'react'
import styled from 'styled-components'

import theme from '../../../styles/themes/default'

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 440px;

    > img {
        width: 100%;  
    }
`

Container.defaultProps = {
    theme: theme
}

const ProjectCardImage = (props) => {

    const { image } = props;

    return (
        <Container>
            <img src={image} />
        </Container>
    )

}

export default ProjectCardImage