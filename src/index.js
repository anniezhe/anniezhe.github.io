import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./pages/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
