import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

function Search() {
  return (
    <div className="Search">
      <div className="container">
        <form>
          <input type="search" placeholder="Enter city name" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <CurrentWeather />
        <WeatherForecast/>
      </div>
    </div>
  );
}

export default Search;
