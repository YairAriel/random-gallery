import React from 'react';
import styled from 'styled-components';

const SinglePicture = ({picId, author, grayscale}) => {
  return (
    <Picture gray={grayscale ? 1 : 0}>
      <img src={`https://picsum.photos/id/${picId}/300/300`} alt={author} />
      <p>Taken by <span>{author}</span></p>
    </Picture>
  )
}

const Picture = styled.div`
    display: inline-block;
    margin: 1em;
    border: 8px solid #fff;
    border-radius: 4px;
    box-shadow:0 2px 10px rgba(0,0,0,.2);
    background: #fff;
    img {
      filter: ${props => props.gray ? 'grayscale(100%)' : 'none'};
    }
    span {
      font-weight: bold;
      margin-left: 4px;
    }
`;

export default SinglePicture;