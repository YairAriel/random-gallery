import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPictures } from '../../api/api';
import Header from '../../components/Header/Header';
import RefreshBtn from '../../components/RefreshBtn/RefreshBtn';
import GrayscaleToggle from '../../components/GrayscaleToggle/GrayscaleToggle';
import PicturesGrid from '../../components/PicturesGrid/PicturesGrid';
import GridPlaceholder from '../../components/GridPlaceholder/GridPlaceholder';

const Gallery = () => {
  const [pictures, setPictures] = useState(null);
  const [grayscale, setGrayscale] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    getPictures().then(pics => {
      setPictures(pics);
      setLoading(false);
    }).catch(err => 
      setLoading(false)
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const toggleGrayscale = () => {
    setGrayscale(grayscale => !grayscale);
  }

  const refreshHandler = () => {
    fetchData();
  }

  return (
    <GalleryView>
      <Header />
      <RefreshBtn onRefreshClicked={refreshHandler} isLoading={loading}/>
      <GrayscaleToggle isGrayscale={grayscale} onToggleGrayscale={toggleGrayscale}/>
      { pictures ? <PicturesGrid picturesList={pictures} grayscale={grayscale} /> 
                : <GridPlaceholder isLoading={loading}/> }
    </GalleryView>
  ) 
}

const GalleryView = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default Gallery;

