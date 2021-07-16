import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

function Search() {
  let [city, setCity] = useState("");
  let [response, setResponse] = useState({});

  function getWeatherData(response) {
    console.log(response.data.coord.lon,response.data.coord.lat );
    setResponse({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      country: response.data.sys.country,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].main,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4dfdc1dfbd9af8701deee7d18b22e9b&units=metric`;
    axios.get(url).then(getWeatherData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter city name"
        onChange={updateCity}
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
  return (
    <div className="Search">
      <div className="container">
        {form}
        <CurrentWeather response={response} />
        <WeatherForecast response={response} />
      </div>
    </div>
  );
}

export default Search;
