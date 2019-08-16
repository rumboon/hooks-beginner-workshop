import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-family: sans-serif;
    font-size: 1.25rem;
    width: 100%;
    height: 2rem;
`

const Search = (props) => {
    const handleInput = (e) => {
        // TODO create a debounce custom hook
        props.onSearch(e.currentTarget.value);
    }

    return (
        <Input onChange={handleInput} />
    )
}

export default Search;