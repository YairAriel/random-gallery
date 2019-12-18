import React from 'react';
import SinglePicture from '../SinglePicture/SinglePicture';
import styled from 'styled-components';

const PicturesGrid = ({picturesList}) => {

  return (
    <Grid>
      {picturesList.map(pic => (
        <SinglePicture key={pic.id} picId={pic.id} author={pic.author} />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  background: #212121;
`

export default PicturesGrid;