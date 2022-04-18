import React from 'react';
import styled from 'styled-components'
import {animate, motion} from 'framer-motion'
import {FaAirbnb} from 'react-icons/fa'

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

const MySvg = styled.svg`
    width:350px;
    heighT:350px;
    path{
        stroke: black;
        stroke-width: 2;
    }
`
const svgVars = {
    start:{
        fill:'rgba(0,0,0,0)',
        pathLength:0
    },
    end:{
        fill:'rgba(0,0,0,1)',
        pathLength:1,
    }
}
const PartFive = () => {
    return (
        <Wrapper>
            {/* what is svg code ?*/}
            <MySvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/* path에 fill stroke등을 통해 선, 배경색 등을 세팅하는데 ? => 검색필요할듯. (transparent = 투명) */}
                <motion.path
                variants={svgVars}
                initial="start"
                transition={{
                    default:{duration:3.5},
                    // 모든 key에 채워질 animation => default 그후 애니메이션의 transition을 key를 찝어서 제외하고 조절할수있음
                    fill:{duration:2,delay:1}
                    // default로 전체 애니메이션을 주고. 각 key의 애니메이션에 transition을 따로 줄수도 있다. => 라인그려지고 배경색채워줌 (transition의 순서)
                }}
                animate="end"
                d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"/>
            </MySvg>
        </Wrapper>
    );
};

export default PartFive;