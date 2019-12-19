import React from 'react';
import styled from 'styled-components';

const GridPlaceholder = ({noResults}) => {
  return (
    <Placeholder>
      {noResults ? <p>No Results</p> : null}
    </Placeholder>
  )
}

const Placeholder = styled.div`
  height: 100vh;
  background: transparent;
  color: #fff;
  font-size: 1.2em;
`

export default GridPlaceholder;