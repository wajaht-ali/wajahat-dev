import React from "react";
import "../src/styles/App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <Header />
          <Home />
        </div>
        <Portfolio />
        <Education />
      </BrowserRouter>
    </div>
  );
}

export default App;
