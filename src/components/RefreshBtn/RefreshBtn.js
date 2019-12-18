import React from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const RefreshBtn = ({onRefreshClicked}) => {
  return (
    <Button onClick={onRefreshClicked}>
      <MaterialIcon icon="sync" color="#fff" size="medium" />
      Give me something else
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
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
`

export default RefreshBtn;