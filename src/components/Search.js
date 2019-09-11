import React from 'react';
import { Input } from '../styles/Search';

const Search = (props) => {
    const handleInput = (e) => {
        props.onSearch(e.currentTarget.value);
    }

    return (
        <Input onChange={handleInput} />
    )
}

export default Search;