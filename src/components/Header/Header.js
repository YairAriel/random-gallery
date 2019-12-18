import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <header>
      <HeaderText>random gallery</HeaderText>
    </header>
  )
}

const HeaderText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 4em;
  margin: 0;
  padding: .5em 0;

`

export default Header;