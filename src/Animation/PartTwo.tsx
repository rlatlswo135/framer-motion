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
  background-color: rgba(155,155,155,0.3);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  display:grid;
  grid-template-columns: repeat(2,1fr);
  /* grid에서 colums이 열인데 약간 아는대로 생각하는거의 반대인듯. => 열이 2개 (세로 2줄) 1fr씩 차지 그게 그리드가 반복(repeat)*/
`;
const Circle = styled(motion.div)`
  background-color: white;
  place-self:center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  width:70px;
  height:70px;
  border-radius: 36px;
`
const boxVars = {
  start:{
    opacity:0,
    y:100
  },
  end:{
    opacity:1,
    scale:1,
    y:0,
    transition:{
      type:"spring",
      duration:0.5,
      bounce:0.5,
      // ;;와 자식들의 delay까지 조절해줄수있음 자식들이 4개면 delayChid로 한꺼번에. 그 자식들을 staggerChild로 또 하나씩 조절하고 와;개질바ㅣㅂ롸;;;ㅇ;;;
      delayChildren:0.5,
      staggerChildren:0.2
    }
  }
}
const circleVars = {
  start:{
    opacity:0,
    y:10
  },
  end:{
    y:0,
    opacity:1,
    transition:{
      type:"spring",
    }}
}
function PartTwo() {
  return (
    <Wrapper>
      <Box
      //약간 튕기는듯한 느낌을 볼수있다. 어쨋든 다양한게있으니 문서보고 해보자 => spring은 튕기는듯한 느낌이라 제동 탄력성 이런것도 다 조정가능하다 멋지다!
      variants={boxVars}
      //variants props를 이용해 내 애니메이션 스테이지를 여러개만들고 해당 variants obj에 키들만 initial animate등 원하는 시점에 연결만 시켜주면된다
      initial="start"
      //myVarinats obj에 start키를가진 애니메이션이 들어와야하니 (키값은 당연히 커스텀이겠고)
      animate="end"
      >
        <Circle variants={circleVars}/>
        <Circle variants={circleVars}/>
        <Circle variants={circleVars}/>
        <Circle variants={circleVars}/>
      </Box>
    </Wrapper>
  );
}

export default PartTwo;
