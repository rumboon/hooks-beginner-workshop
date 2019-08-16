import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    padding: 0.5rem;
    height: 2rem;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Employee = (props) => (
    <Root>
        <Avatar name={props.function} size={2} />
        <Description>
            <div>{`${props.first_name} ${props.last_name}`}</div>
            <div>{props.function}</div>
        </Description>
    </Root>
);

export default Employee;