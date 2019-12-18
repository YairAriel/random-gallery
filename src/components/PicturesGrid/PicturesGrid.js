import React from 'react';
import SinglePicture from '../SinglePicture/SinglePicture';

const PicturesGrid = ({picturesList}) => {

  return (
    <div>
      {picturesList.map(pic => (
        <SinglePicture key={pic.id} picId={pic.id} author={pic.author} />
      ))}
    </div>
  )
}

export default PicturesGrid;