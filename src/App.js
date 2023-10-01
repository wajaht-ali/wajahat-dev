import React from "react";
import "../src/styles/App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Home />
      </div>
      <Portfolio />
    </div>
  );
}

export default App;
