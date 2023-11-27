import "./App.css";
import Header from "./section/header/header";
import Info from "./section/information/information";
function App() {
  return (
    <div className="App">
      <div id="sec1">
        <Header></Header>
      </div>
      <div id="sec2">
        <Info></Info>
      </div>
    </div>
  );
}

export default App;
