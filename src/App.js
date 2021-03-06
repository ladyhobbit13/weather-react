import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container" id="weather-app">
        <h1>
          Is It a Beautiful Day for a Walk? <em className="asterisk">*</em>
        </h1>
        <h3 id="today-date"></h3>
        <h3 id="today-time"></h3>
        <Weather />
      </div>
      <footer>
        <a id="coded-by" href="https://github.com/ladyhobbit13/weather-react">
          Open-source code
        </a>
        , by Claire Fleischer
      </footer>
      v
    </div>
  );
}

export default App;
