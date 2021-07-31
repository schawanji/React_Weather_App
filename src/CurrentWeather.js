import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12">
          <div className="">
            <ul>
              <li className="city">{props.weather.name}</li>
              <li className="weather-summary-text">
                <FormattedDate timestamp={props.weather.date} />
              </li>
              <li className="weather-summary-text">{props.weather.description}</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="weather-temp">
            {" "}
            <WeatherIcon icon={props.weather.icon} size={64}/>
            {props.weather.temp}
            <span className="weather-temp-unit">°C</span>{" "}
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-summary-text">
            <li>Humidity : {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
      <WeatherForecast lat={props.weather.lat} lon={props.weather.lon} />
    </div>
  );
}
