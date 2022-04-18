import React,{useState} from 'react';
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
  width: 400px;
  height: 400px;
  background-color: rgba(255,255,255,1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  /* grid에서 colums이 열인데 약간 아는대로 생각하는거의 반대인듯. => 열이 2개 (세로 2줄) 1fr씩 차지 그게 그리드가 반복(repeat)*/
`;
const Circle = styled(motion.div)`
    background-color: #00a5ff;
    width:100px;
    height:100px;
    border-radius: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const PartSeven = () => {
    const [clicked,setClicked] = useState(false);
    const toggleClicked = () => setClicked(prev => !prev)
    return (
        <Wrapper onClick={toggleClicked}>
                {/* Box가 state에 의해서 하위 아이템의 위치를 바꾸는데 '바뀌는' 엘리먼트에 layout 속성을 붙여주면 자동으로 바뀌는 엘리먼트를 인식해서애니메이션 효과를 넣어준다; */}
                {/* layout속성이 붙은 엘리먼트의 위치에 조정이 생기면 자동으로 애니메이션기능을 넣어주는 layout. <-> layoutId랑은 다른거다 */}
            <Box>
                {!clicked ? <Circle layoutId='circle' style={{borderRadius:'50px',scale:1}}/> : null}
            </Box>
            <Box>
                {clicked ? <Circle layoutId='circle' style={{borderRadius:'0px',scale:1.5}}/> : null}
            </Box>
            Click!
            {/* 개씹 두 Circle이 다른 컴포넌트인테 애니메이션으로 연결이됬다;; layoutId를 같게 세팅해주면 연결되서 왓다리갓다리함 ㅂㅅㅂㅅ바수바ㅣ숩ㄷㅅ */}
        </Wrapper>
    );
};

export default PartSeven;