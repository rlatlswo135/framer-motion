import React from 'react';
import logo from './logo.svg';
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
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  /* grid에서 colums이 열인데 약간 아는대로 생각하는거의 반대인듯. => 열이 2개 (세로 2줄) 1fr씩 차지 그게 그리드가 반복(repeat)*/
`;

const boxVars={
  
}

function PartThree() {
  return (
    <Wrapper>
      <Box whileHover={{scale:1.5, rotateZ:'90deg'}} whileTap={{scale:1,borderRadius:'100px'}}></Box>
    </Wrapper>
  );
}

export default PartThree;
