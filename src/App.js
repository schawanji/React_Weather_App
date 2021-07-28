import "./App.css";
import axios from "axios";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";

function App() {
  let city = "New York";
  const [response, setResponse] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function getWeatherData(response) {
    setResponse(true);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt*1000),
      icon: response.data.weather[0].icon,
      name: response.data.name,
      description: response.data.weather[0].description,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
  }
  if (response) {
    return (
      <div className="container">
        <CurrentWeather weather={weatherData} />
        <small>
          {" "}
          <a href="https://schawanji.github.io/">Open source project</a> by
          <a href="https://github.com/schawanji"> Sharon Chawanji</a>{" "}
        </small>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4dfdc1dfbd9af8701deee7d18b22e9b&units=metric`;
    axios.get(url).then(getWeatherData);
    return "Loading.........";
  }
}

export default App;
