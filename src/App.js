import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container" id="weaather-app">
        <h1>
          Is It a Beautiful Day for a Walk? <em className="asterisk">*</em>
        </h1>
        <h3 id="today-date"></h3>
        <h3 id="today-time"></h3>
        <Weather />
      </div>
    </div>
  );
}

export default App;
