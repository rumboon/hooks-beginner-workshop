import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: auto;
    height: 100%;
`

const Avatar = (props) => {
    return <Image src={`/static/images/svg/${props.name}.svg`} alt={props.name} />
};

export default Avatar;