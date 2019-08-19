import React from 'react';
import { Input } from '../styles/Search';

const Search = (props) => {
    const handleInput = (e) => {
        // NOTE could createa an assignment for creating a debounce custom hook
        props.onSearch(e.currentTarget.value);
    }

    return (
        <Input onChange={handleInput} />
    )
}

export default Search;