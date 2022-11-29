import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBox from "./Components/Menu/boxForMenu";
import Page from "./Components/Pages/page";

function App() {
  return (
    <div className="App">
      <MenuBox />
      <Page />
    </div>
  );
}

export default App;
