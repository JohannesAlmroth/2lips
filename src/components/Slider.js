import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { width: 300, margin:'20px'};

const markStyle = { width: '20px', height: '20px', bottom:-8, border:'solid 2px #96dbfa', marginLeft:'-10px' };
const activeStyle = { background:'#96dbfa',zIndex:2};
const baseStyle = { background:'#96dbfa'};



const marks = {
  1: {
    style: {markStyle},
    label: "1",
  },
  2: {
    style: {markStyle},
    label: "2",
  },
  3: {
    style: {markStyle},
    label: "3",
  },
  4: {
    style: {markStyle},
    label: "4",
  },
  5: {
    style: {markStyle},
    label: "5",
  }

};

function NMISlider() {


  return(
    <div style = {style}>
      <Slider
        min={1}
        max={5}
        defaultValue={3}
        dotStyle = {markStyle}
        activeDotStyle = {activeStyle}
        railStyle = {baseStyle}
        included ={false}
        marks = {marks}
        step={null}  />
    </div>
  );
  
}
export default NMISlider;