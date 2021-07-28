import "./CurrentWeather.css";
import Date from "./Date";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12">
          <div className="">
            <ul>
              <li className="city">{props.weather.name}</li>
              <li>
                <Date date={props.weather.date} />
              </li>
              <li className="description">{props.weather.description}</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="weather-temp">
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt=""
            />
            {props.weather.temp}
            <span className="weather-temp-unit">°C</span>{" "}
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity : {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
