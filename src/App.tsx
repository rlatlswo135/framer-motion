import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// framer + styled-components
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function App() {
  return (
    <Wrapper>
      <Box
      initial={{scale:0}}
      //약간 튕기는듯한 느낌을 볼수있다. 어쨋든 다양한게있으니 문서보고 해보자 => spring은 튕기는듯한 느낌이라 제동 탄력성 이런것도 다 조정가능하다
      transition={{type:"spring"}}
      animate={{scale:1,rotateZ:'360deg'}}/>
    </Wrapper>
  );
}

export default App;
