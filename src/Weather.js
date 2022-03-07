import React from "react";
import axios from "axios";
import "/.Weather.css";

export default function Weather() {
  return (
    <div className="buttons">
      <form id="search-form" className="mb-3">
        <input
          type="text"
          className="form-control"
          id="city-search"
          aria-describedby="emailHelp"
          placeholder="Where Will You Be Walking?"
        />
        <button type="submit" className="btn btn-primary" id="search-button">
          👟👟
        </button>
      </form>
      <button id="current-city">Current City</button>
      <div className="card-body">
        <h3 id="city-name"></h3>
        <img src="" alt="" id="icon" />
        <p className="card-text">
          <ul>
            <li>
              <span id="temperature"></span>
              <a href="#" id="fahrenheit-link" className="active">
                °F
              </a>
              |
              <a href="#" id="celsius-link">
                °C
              </a>
            </li>
            <li>
              <span id="wind"></span>
            </li>
          </ul>
        </p>
      </div>
      <br />
      <br />
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
