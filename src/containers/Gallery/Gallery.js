import React, { useState, useEffect } from 'react';
import { getPictures } from '../../api/api';
import PicturesGrid from '../../components/PicturesGrid/PicturesGrid';

const Gallery = () => {
  const [pictures, setPictures] = useState(null);

  useEffect(() => {
    getPictures().then(pics => setPictures(pics));
  }, []);

  return (
    pictures ? <PicturesGrid picturesList={pictures} /> : null
  ) 
}

export default Gallery;

