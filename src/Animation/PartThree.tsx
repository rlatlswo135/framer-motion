import React,{useRef} from 'react';
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
  background-color: rgba(255,255,255,1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  /* grid에서 colums이 열인데 약간 아는대로 생각하는거의 반대인듯. => 열이 2개 (세로 2줄) 1fr씩 차지 그게 그리드가 반복(repeat)*/
`;
const BiggerBox = styled.div`
  width:600px;
  height: 600px;
  border-radius: 50px;
  background-color: rgba(255,255,255,0.2);
  display:flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const boxVars={
  hover:{
    scale:1.5,
    rotateZ:'90deg'
  },
  tap:{
    scale:1,
    borderRadius:'100px'
  },
  drag:{
    backgroundColor:"rgba(46,204,113)"
    // 단일컬러는 string값이기때문에 애니메이션효과를 못준다 rgba를 이용해 숫자를 써줘야 transition을 먹여서 애니메이션효과를 주며 컬러를 바꿀수있다.
  }
}

function PartThree() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        {/* variants obj가 묶이고 그안에 키들을 꺼내쓰니까 stirng으로 키값을 참조하는 그런느낌의 것이네.
        그냥 obj를 이용하는 느낌이라고 생각하는데 part2처럼 자식들까지 다이나믹하게 이용할수있는. */}
        <Box
        // drag="x"
        drag
        variants={boxVars}
        whileHover={'hover'}
        whileTap={'tap'}
        whileDrag={'drag'}
        // 외부제한에서 마우스를 놓고 돌아가는 시간을 조절하는듯함
        dragElastic={0.5}
        // 이렇게 요소를 놓을때 원위치할수도있음
        dragSnapToOrigin={true}
        // 방향을 제한할수도 => 수학적 계산을하던지 useRef로 엘리먼트를 불러와서 넣어주던지. => 공식문세어 useRef써서 넣어줄수있다고 되어있음
        dragConstraints={biggerBoxRef}
        />
        {/* 이 드래그 기능을 활성화하니까 드래그가 맘대로 위치가 바뀐다 -> 이걸로 그 가까이 대기 이런거 할수있을듯? 
        이렇게 drag방향을 제한시킬수도 있고, drag하는동안 element에 애니메이션을 줄수있다*/}
        </BiggerBox>
      </Wrapper>
  );
}

export default PartThree;
