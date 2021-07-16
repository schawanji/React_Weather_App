import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherForecast.css";
function WeatherForecast() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="weatherforecast">
          <div className="forecast-day"> Sat</div>
          <div className="forecast-icon">
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={38}
              animate={true}
            />
          </div>
          <div className="forecast-temperature">34°</div>
        </div>
      </div>
    </div>
  );
}
export default WeatherForecast;
