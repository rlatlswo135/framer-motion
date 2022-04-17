import React from 'react';
import styled from 'styled-components'
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom'
const Container = styled.div`
  font-size:5em;
  font-weight: 900;
  color:white;
`
const App = () => {
  return (
    <Container>
      <Link to="part1">part1</Link>
      <Link to="part2">part2</Link>
      <Link to="part3">part3</Link>
      <Link to="part4">part4</Link>
    </Container>
  );
};

export default App;