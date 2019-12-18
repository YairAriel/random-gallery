import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPictures } from '../../api/api';
import Header from '../../components/Header/Header';
import GrayscaleToggle from '../../components/GrayscaleToggle/GrayscaleToggle';
import PicturesGrid from '../../components/PicturesGrid/PicturesGrid';

const Gallery = () => {
  const [pictures, setPictures] = useState(null);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    getPictures().then(pics => setPictures(pics));
  }, []);

  const toggleGrayscale = () => {
    setGrayscale(grayscale => !grayscale);
  }

  return (
    <GalleryView>
      <Header />
      <GrayscaleToggle isGrayscale={grayscale} onToggleGrayscale={toggleGrayscale}/>
      { pictures ? <PicturesGrid picturesList={pictures} grayscale={grayscale} /> : null }
    </GalleryView>
  ) 
}

const GalleryView = styled.div`

`

export default Gallery;

