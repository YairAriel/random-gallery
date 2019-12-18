import React from 'react';
import SinglePicture from '../SinglePicture/SinglePicture';
import styled from 'styled-components';

const PicturesGrid = ({picturesList, grayscale}) => {

  return (
    <Grid>
      {picturesList.map(pic => (
        <SinglePicture key={pic.id} picId={pic.id} author={pic.author} grayscale={grayscale}/>
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  margin-top: 1.5em;
`

export default PicturesGrid;