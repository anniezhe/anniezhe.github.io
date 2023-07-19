import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
// import Contact from './pages/Contact';
// import Footer from './pages/Footer';
// import Project from './pages/Project';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){return(
  <BrowserRouter>
    <Navigation />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
}

ReactDOM.render(<App />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
