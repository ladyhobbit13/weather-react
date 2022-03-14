import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speedd,
      city: response.data.main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1311cf318d3edfa90a5746a7bee262dc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lq=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="buttons">
        <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="city-search"
            aria-describedby="emailHelp"
            placeholder="City"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button type="submit" className="btn btn-primary" id="search-button">
            👟👟
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
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
  } else {
    search();
    return "Loading...";
  }
}
