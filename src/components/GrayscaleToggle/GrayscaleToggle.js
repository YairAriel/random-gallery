import React from "react";
import { Toggle } from "react-toggle-component";
import styled from 'styled-components';
 
const GrayscaleToggle = ({isGrayscale, onToggleGrayscale}) => {
  return (
    <div>
      <Label htmlFor="toggle-3">
        Grayscale
        <Toggle
          leftBackgroundColor="#212121"
          rightBackgroundColor="gray"
          borderColor="white"
          knobColor="white"
          name="toggle"
          checked={isGrayscale}
          onToggle={onToggleGrayscale}
        />
      </Label>
    </div>
  )
}

const Label = styled.label`
  font-weight: bold;
  font-size: 1.6em;
  cursor: pointer;
  color: #fff;
`;

export default GrayscaleToggle;