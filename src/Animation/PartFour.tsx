import React,{useRef} from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import {useMotionValue,motion, useTransform,useViewportScroll} from 'framer-motion'
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
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

function PartFour() {
    const {scrollY,scrollYProgress} = useViewportScroll()
    const opacityOutput = [0.5, 1, 0.5];
    const colorOutput = ["#f00", "#fff", "#0f0"];
    const bgColorOutput =     [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
    const xInput = [-700,0,700]
    const x = useMotionValue(0)
    const customValue = useTransform(x,xInput,[-1,0,1])
    const opacity = useTransform(x,xInput,opacityOutput)
    const color = useTransform(x,xInput,colorOutput)
    const rotateZ = useTransform(x,xInput,[-360,0,360])
    // 생각해보면 '360deg' 이렇게넣으면 단순 스트링이라 안될것같다. => +360deg는 되는데 '-' 에서 안됌
    const bgColor = useTransform(x,[-700,700],bgColorOutput)
    const scrollScale = useTransform(scrollYProgress,[0,1],[1,2])
    /*
    오진다진짜;; style이랑 연동시키는 이유를 알거같음. useTransform으로 내가 원하는 값으로 set해주고 그 구간에 애니메이션이걸림;
    그래서 그 구간을 정해주면 그 구간안에서 발생시킬 애니메이션을 다 셋팅할수있다 개쩐다
    */
//(motionvalue,limit구간,내가set하고싶은 구간)
  useEffect(()=>{
    //state가 아니어서 렌더가 안되기때문에 onChange이벤트를 넣어줘서 값을 추적하는 모오습
      // customValue.onChange(()=>console.log(customValue.get()))
      scrollY.onChange(()=>console.log(scrollY.get(),scrollYProgress.get()))
      // 둘사이의 차이. px이나 %냐
  },[])
/*
중요한건 motionValue가 바뀌어도 react의 렌더싸이클은 안건드린다는것. 즉 값이 다시 set되도 state가 아니기때문에 render가 일어나지 않는다.
그렇기때문에 x자체에 onChange이벤트를 넣어줘서 값을 추적하도록 해줬다. x.get() => 공식문서에 있는 motionValue의 값 추적하는 메소드
*/
  return (
    <Wrapper style={{background:bgColor}}>
        <Box 
        drag="x"
        dragSnapToOrigin={true}
        style={{x,backgroundColor:color,opacity,scale:scrollScale,rotateZ}}
        // motionValue를 style에 묶어주면 되는듯
        whileDrag={{}}
        />
      </Wrapper>
  );
}

export default PartFour;
