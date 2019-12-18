import React from 'react';

const SinglePicture = ({picId, author}) => {
  return (
    <div>
      <img src={`https://picsum.photos/id/${picId}/300/300`} alt={author}/>
      <p>{author}</p>
    </div>
  )
}

export default SinglePicture;