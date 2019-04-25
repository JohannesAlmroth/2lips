import React from 'react';
import './App.css';
import Survey from './components/Survey';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
    background-image: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
`;

function App() {
  return (
    <Wrapper>
      <Survey />
    </Wrapper>
  );
}

export default App;
