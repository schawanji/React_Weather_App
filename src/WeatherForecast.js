import axios from "axios";
import { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [response, setResponse] = useState(false);
  const [forecast, setForecast] = useState(null);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function displayWeatherForecast(response) {
    setForecast(response.data.daily);
    setResponse(true);
  }

  if (response) {
    return (
      <div className="row">
        {days.map(function (day, index) {
          if (index < 6) {
            return (
              <div className="col-2" key={index}>
                <div className="day">
                  {days[new Date(forecast[index].dt * 1000).getDay()]}
                </div>
                <WeatherIcon icon={forecast[index].weather[0].icon} />
                <div className="max-temp">
                  {Math.round(forecast[index].temp.max)}°{" "}
                  <span className="min-temp">
                    {" "}
                    {Math.round(forecast[index].temp.min)}°
                  </span>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  } else {
    let lat = props.lat;
    let lon = props.lon;
    let apiKey = `e4dfdc1dfbd9af8701deee7d18b22e9b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherForecast);
    return "Loading............";
  }
}
