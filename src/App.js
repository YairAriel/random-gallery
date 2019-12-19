import React from 'react';
import styled from 'styled-components';
import Gallery from './containers/Gallery/Gallery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faSyncAlt);

function App() {
  return (
    <AppContainer>
      <Gallery />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
  background: #212121;
`

export default App;
