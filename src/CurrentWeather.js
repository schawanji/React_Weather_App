import ReactAnimatedWeather from "react-animated-weather";

function CurrentWeather(param) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12 weather-summary">
          <h1> Harare</h1>
          <div className="weather-summary-text"> Friday 14:15</div>
          <div className="weather-summary-text"> Sunny</div>
        </div>

        <div className="col-6 ">
          <div className="clearfix">
            <div className="float-left weather-icon">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={54}
                animate={true}
              />
            </div>
            <div className="weather-temp">15</div>{" "}
            <div className="weather-temp-units">°C</div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 90%</li>
            <li>Wind Speed: 3km /h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
