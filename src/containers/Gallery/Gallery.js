import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPictures } from '../../api/api';
import Header from '../../components/Header/Header';
import PicturesGrid from '../../components/PicturesGrid/PicturesGrid';

const Gallery = () => {
  const [pictures, setPictures] = useState(null);

  useEffect(() => {
    getPictures().then(pics => setPictures(pics));
  }, []);

  return (
    <GalleryView>
      <Header />
      { pictures ? <PicturesGrid picturesList={pictures} /> : null }
    </GalleryView>
  ) 
}

const GalleryView = styled.div`

`

export default Gallery;

