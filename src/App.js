import React from "react";
import "../src/styles/App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import { BrowserRouter } from "react-router-dom";
import Education from "./components/Education";
// import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

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
        {/* <MyWork /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
