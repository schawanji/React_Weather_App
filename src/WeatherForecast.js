import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import "./WeatherForecast.css";
import { useState } from "react";

function WeatherForecast(props) {
  let [response, setResponse] = useState([]);
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  function getWeatherData(response) {
    console.log(response.data.daily);
  }

  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.weather.lat}&lon=${props.weather.lon}&exclude=hourly&appid=e4dfdc1dfbd9af8701deee7d18b22e9b&units=metric`;

  axios.get(url).then(getWeatherData);

  return (
    <div className="row">
      
      <div className="col-sm-2">
        <div className="weatherforecast">
          <div className="forecast-day"></div>
          <div className="forecast-icon">
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={""}
              size={38}
              animate={true}
            />
          </div>
          <div className="forecast-temperature">°</div>
        </div>
      </div>
      
    </div>
  );
}
export default WeatherForecast;
