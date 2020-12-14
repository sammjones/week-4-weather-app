import React from "react";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="containerWrap">
        <h1>Weather Search Engine</h1>
        <Search value={32} />
      </div>
    </div>
  );
}
