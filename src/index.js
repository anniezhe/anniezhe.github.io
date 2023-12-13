import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Project from "./pages/Project";
const root = createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
