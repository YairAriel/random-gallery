import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RefreshBtn = ({onRefreshClicked, isLoading}) => {
  return (
    <Button onClick={onRefreshClicked} disabled={isLoading}>
      <FontAwesomeIcon icon="sync-alt" className={isLoading ? 'loading' : ''}/>
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
    background: #333333;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  svg {
    margin: 0 .5em;
  }
  .loading {
    animation: rotation 2s infinite
  }

  @media (max-width: 480px) {
    width: 90vw;
  }

  @keyframes rotation {
		from {
				transform: rotate(0deg);
		}
		to {
				transform: rotate(359deg);
    }
  }
`

export default RefreshBtn;