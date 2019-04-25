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
`;

function App() {
  return (
    <Wrapper>
      <Survey />
    </Wrapper>
  );
}

export default App;
