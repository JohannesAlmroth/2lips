import React from 'react';
import './App.css';
import Survey from './components/Survey';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Survey />

    </Wrapper>
  );
}

export default App;
