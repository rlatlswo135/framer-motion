import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import PartTwo from './Animation/PartTwo';
import PartOne from './Animation/PartOne';
import PartThree from './Animation/PartThree';
import PartFour from './Animation/PartFour';

const GlobalStyle = createGlobalStyle`
  body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
}
a {
  text-decoration:none;
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/part1" element={<PartOne />} />
      <Route path="/part2" element={<PartTwo />} />
      <Route path="/part3" element={<PartThree />} />
      <Route path="/part4" element={<PartFour />} />
    </Routes>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
