import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.jsx'
import reportWebVitals from './reportWebVitals'
import Header from './Components/Header/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Aside from './Components/Aside/Aside.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Error from './Pages/Error/Error.jsx'

const GlobalStyle = createGlobalStyle`
* {
  font-family: roboto, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
