import "./App.css";
import axios from "axios";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";

function App() {
  let [city, setCity] = useState("Bern");
  let [response, setResponse] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function getWeatherData(response) {
    
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      name: response.data.name,
      description: response.data.weather[0].description,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
    setResponse(true);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4dfdc1dfbd9af8701deee7d18b22e9b&units=metric`;
    axios.get(url).then(getWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (response) {
    return (
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter City Name"
                  onChange={updateCity}
                />
                <input type="submit" value="Search" />
              </form>
              <CurrentWeather weather={weatherData} />
            </div>
          </div>
        </div>

        <small>
          {" "}
          <a href="https://schawanji.github.io/">Open source project</a> by
          <a href="https://github.com/schawanji"> Sharon Chawanji</a>{" "}
        </small>
      </div>
    );
  } else {
    search();
    return "Loading.........";
  }
}

export default App;
