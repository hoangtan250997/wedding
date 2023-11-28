import "./App.css";
import Header from "./section/header/header";
import Info from "./section/information/information";
import Location from "./section/location/location";
import Time from "./section/time/time";
import Event from "./section/event/event";
import Moment from "./section/moment/moment";
import Footer from "./section/footer/footer";
function App() {
  return (
    <div className="App">
      <div id="sec1">
        <Header></Header>
      </div>
      <div id="sec2">
        <Info></Info>
      </div>
      <div id="sec3">
        <Location></Location>
      </div>
      <div id="sec4">
        <Time></Time>
      </div>
      <div id="sec5">
        <Event></Event>
      </div>
      <div id="sec6">
        <Moment></Moment>
      </div>
      <div id="sec7">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
