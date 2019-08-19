import React from 'react';
import Avatar from './Avatar';
import { Root, Description } from '../styles/Employee';

const Employee = (props) => (
    <Root>
        <Avatar employeeFunction={props.function} />
        <Description>
            <div>{`${props.first_name} ${props.last_name}`}</div>
            <div>{props.function}</div>
        </Description>
    </Root>
);

export default Employee;