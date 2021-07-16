import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="row">
          <div className="col-12">
            <Search />
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/schawanji/React_Weather_App"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Sharon Chawanji
      </small>
    </div>
  );
}

export default App;
