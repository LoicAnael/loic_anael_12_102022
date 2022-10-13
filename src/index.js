import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home/home.jsx';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle/>
    <Header/>
    <Home />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
