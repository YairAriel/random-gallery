import React from 'react';
import styled from 'styled-components';

const SearchBox = ({onSearch}) => {
  return (
    <Search type="text" placeholder="Search by author" onChange={onSearch} />
  )
}

const Search = styled.input`
  width: 22em;
  border: 3px solid #fff;
  border-radius: 3px;
  color: #fff;
  background: #212121;
  padding: .3em 1em;
  display: block;
  font-size: 1.5em;
  margin: 1em auto;
  outline: none;
  @media (max-width: 480px) {
    width: 72vw;
  }
`

export default SearchBox;