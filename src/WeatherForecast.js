import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  let days = [
    { date: "Mon", temp: 0 },
    { date: "Tue", temp: 20 },
    { date: "Wed", temp: 50 },
    { date: "Thu", temp: 5 },
    { date: "Fri", temp: 70 },
    { date: "Sat", temp: 58 },
  ];
  function getWeatherData(response) {
    //console.log(response.data.daily[0]);
  }

  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.weather.lat}&lon=${props.weather.lon}&exclude=hourly&appid=e4dfdc1dfbd9af8701deee7d18b22e9b&units=metric`;

  axios.get(url).then(getWeatherData);

  return (
    <div className="row">
      {days.map(function (day, index) {
        
        return (
          <div className="col-sm-2" key={index}>
            <div className="weatherforecast">
              <div className="forecast-day"> {day.date}</div>
              <div className="forecast-icon">
                <ReactAnimatedWeather
                  icon={"CLEAR_DAY"}
                  color={""}
                  size={38}
                  animate={true}
                />
              </div>
              <div className="forecast-temperature">{day.temp}°</div>
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
}
export default WeatherForecast;
