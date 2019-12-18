import React from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const RefreshBtn = ({onRefreshClicked}) => {
  return (
    <Button onClick={onRefreshClicked}>
      <MaterialIcon icon="sync" color="#fff" size="medium" />
      Refresh Gallery
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5em;
  padding: .5em 1em;
  margin: .5em auto;
  font-weight: bold;
  background: #212121;
  border: 3px solid #fff;
  border-radius: 5px;
  color: #fff;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  i {
    margin: .2em .2em 0 0;
  }
  @media (max-width: 480px) {
    width: 90vw;
  }
`

export default RefreshBtn;