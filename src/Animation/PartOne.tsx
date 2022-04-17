import React from 'react';
import styled from 'styled-components'
import {animate, motion} from 'framer-motion'

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
  display:grid;
  grid-template-columns: repeat(2,1fr);
  /* grid에서 colums이 열인데 약간 아는대로 생각하는거의 반대인듯. => 열이 2개 (세로 2줄) 1fr씩 차지 그게 그리드가 반복(repeat)*/
`;
const PartOne = () => {
    return (
        <Wrapper>
            <Box 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1,rotateZ:'360deg'}}
            transition={{duration:1,type:"spring",bounce:0.5}}
            ></Box>
        </Wrapper>
    );
};

export default PartOne;