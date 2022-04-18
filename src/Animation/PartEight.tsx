import React,{useState} from 'react';
import styled from 'styled-components'
import {animate, motion,AnimatePresence} from 'framer-motion'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled(motion.div)`
    display:grid;
    width:70vw;
    grid-template-columns: repeat(3,1fr);
    gap:10px;
    div:first-child,
    div:last-child{
        /* 라인에서 몇칸 이런느낌일듯 => grid에 관한 좋은 글있으니 다시 봐보자 */
        grid-column: span 2;
    }
`
const Overlay = styled(motion.div)`
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  /* grid에서 colums이 열인데 약간 아는대로 생각하는거의 반대인듯. => 열이 2개 (세로 2줄) 1fr씩 차지 그게 그리드가 반복(repeat)*/
`;
const modalVars = {
    start:{
        backgroundColor:'rgba(0,0,0,0)',
    },
    end:{
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    exit:{
        backgroundColor:'rgba(0,0,0,0)',
    }
}
const PartEight = () => {
    const [clicked,setClicked] = useState(false)
    const [id,setId] = useState<null|string>(null)
    const [layoutId,setLayoutId] = useState(0)
    // useState의 set함수에 콜백함수를 써주면 그 1인자가 전에 state인듯.
    const toggleFun = () => setClicked(prev => !prev)
    const clickFun = (id:number)=> {
        setClicked(prev => !prev)
        setId(String(id))
    }
    return (
        <Wrapper>
            <Grid>
                {[1,2,3,4].map(item => <Box onClick={()=>clickFun(item)} key={item} layoutId={String(item)}></Box>)}
            </Grid>
            <AnimatePresence>
                {clicked ? 
                <Overlay onClick={toggleFun} variants={modalVars} initial="start" animate="end" exit="exit">
                    {/* 같은 layoutId로 묶으니 마치 통로처럼 part7에서 본것처럼 그런느낌인거다 */}
                    <Box layoutId={`${id}`} style={{width:400,height:200}}></Box>                    
                </Overlay> : null}
            </AnimatePresence>
        </Wrapper>
    );
};

export default PartEight;