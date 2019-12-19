import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import SinglePicture from '../SinglePicture/SinglePicture';
import styled from 'styled-components';
import GridPlaceholder from '../GridPlaceholder/GridPlaceholder';

const PicturesGrid = ({picturesList, grayscale}) => {

  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = e => {
    setSearchString(e.target.value.toLowerCase());
  }

  useEffect(() => {
    const results = picturesList.filter(pic =>
      pic.author.toLowerCase().includes(searchString)
    );
    setSearchResults(results);
  }, [searchString, picturesList]);

  return (
    <Grid>
      <SearchBox onSearch={searchHandler} />
      {searchResults.map(pic => (
        <SinglePicture key={pic.id} picId={pic.id} author={pic.author} grayscale={grayscale}/>
      ))}
      {searchResults.length === 0 ? <GridPlaceholder noResults/> : null}
    </Grid>
  )
}

const Grid = styled.div`
  margin-top: 1.5em;
`

export default PicturesGrid;