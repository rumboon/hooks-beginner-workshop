import React from 'react';
import { Image } from '../styles/Avatar';

const Avatar = (props) => (
    <Image 
        src={`/static/images/svg/${props.employeeFunction}.svg`} 
        alt={props.employeeFunction} 
    />
);

export default Avatar;