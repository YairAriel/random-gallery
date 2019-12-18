import React from 'react';
import styled from 'styled-components';
import Gallery from './containers/Gallery/Gallery';

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
