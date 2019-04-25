import React from 'react';
import NMISlider from "./Slider";
import styled from 'styled-components';





const SliderWrapper = styled.div`
  margin: 10px;
  display:flex;
  flex-direction: row;
`;

function SliderGroup() {

  return(
    <SliderWrapper>
      <p> QUESTION 1</p>
    <NMISlider/>
      <p> QUESTION 1</p>

    </SliderWrapper>
  );
  
}
export default SliderGroup;