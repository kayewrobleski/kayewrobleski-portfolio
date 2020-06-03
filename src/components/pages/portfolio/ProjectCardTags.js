import React from 'react'
import styled from 'styled-components'

import Tag from '../../data/Tag'

const Container = styled.div`
    display: flex;
    margin: 1rem;
`

const ProjectCardTags = (props) => {
    const { tags } = props;

    const tagItem = (tag) => <Tag key={tag}>{ tag }</Tag>;

    return (
        <Container>
            { tags.map(tag => tagItem(tag)) }
        </Container>
    )
}

ProjectCardTags.defaultProps = {
    tags: []
}

export default ProjectCardTags