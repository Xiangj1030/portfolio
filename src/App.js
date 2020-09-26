import React from "react";
import "./index.css";
import Home from "./components/pages/Home/Home.component";
import Skills from "./components/pages/Skills/Skills.component";
import Experience from "./components/pages/Experience/Experience.component";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
