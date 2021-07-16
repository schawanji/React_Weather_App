import ReactAnimatedWeather from "react-animated-weather";
import Dates from "./Dates";

function CurrentWeather(props) {
  
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12 weather-summary">
          <h1> {props.response.name}</h1>
          <Dates />

          <div className="weather-summary-text">
            {" "}
            {props.response.description}
          </div>
        </div>

        <div className="col-6 ">
          <div className="clearfix">
            <div className="float-left weather-icon">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={""}
                size={38}
                animate={true}
              />
            </div>
            <div className="weather-temp">{props.response.temperature}</div>{" "}
            <div className="weather-temp-units">°C</div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.response.humidity} %</li>
            <li>Wind Speed: {props.response.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
