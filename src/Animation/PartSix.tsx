import React,{useState,useRef} from 'react';
import styled from 'styled-components'
import {animate, motion, AnimatePresence} from 'framer-motion'

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  display:flex;
  justify-content: center;
  /* position이 default면 통통튄다. 그래서 absolute로 붕띄워서 해야 원하는 느낌이 나올듯 */
  position: absolute;
  top:400px;
  align-items: center;
  font-size:3em;
  font-weight: 900;
`;
//AnimatePresence => 컴포넌트가 사라질때의 animation을 정할수있음
const box = {
    entry: (isBack:number) => ({
    x: isBack>0 ? -500 : 500,
    opacity: 0,
    scale: 0,
    }),
    center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
    type:'spring'
    },
    },
    exit: (isBack:number) => ({
    x: isBack >0 ? 500 : -500,
    opacity: 0,
    scale: 0,
    }),
    };
const PartSix = () => {
    const [visible,setVisible] = useState(1)
    const [prevState,setPrevState] = useState(0)
    const btnRef = useRef<HTMLButtonElement>(null)
    
    const nextFun = () => {
        setPrevState(1)
        setVisible((prev) => prev===5 ? 1 : prev + 1)
    }
    const prevFun = () => {
        setPrevState(-1)
        setVisible((prev) => prev===1 ? 5 : prev - 1)
    }
    return (
        <Wrapper>
            {/* animatePresence는 항상 visible해야함 */}
            {/* exit와 동시에 애니메이션이 일어나는데 완전히 exit된 후에 애니메이션 실행시킨다는거(exit 애니메이션이 끝난후 다음 애니메이션 진행  => exitBeforeEnter 속성*/ }
            <AnimatePresence initial={false} custom={prevState}>
                {/* AnimatePresence에도 custom을 넣어줘야지 바뀐state에 따라 바로바로 variant가 적용됨 => 안넣었더니 꼭 1박스 다음거에만 걸리더라. */}
                {[1,2,3,4,5].map(num => (
                    num === visible ? 
                    <Box
                    custom={prevState}
                    variants={box}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    //AnimatePresence사용법에 따라 key가 있어야지 추적이가능하다
                    key={num}
                    >{num}</Box> : null
                ))}
            </AnimatePresence>
            {/* useRef로 2개를 걸면 마지막에건놈 1놈만 걸리네 ㅇㅇ */}
            <button onClick={nextFun}>next</button>
            <button onClick={prevFun}>prev</button>
        </Wrapper>
    );
};

export default PartSix;