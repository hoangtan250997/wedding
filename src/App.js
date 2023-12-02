import Header from "./section/header/header";
import Info from "./section/information/information";
import Location from "./section/location/location";
import Time from "./section/time/time";
import Event from "./section/event/event";
import Moment from "./section/moment/moment";
import Footer from "./section/footer/footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={2} md={2}></Col>
        <Col xs={8} md={8}>
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
        </Col>
        <Col xs={2} md={2}></Col>
      </Row>
    </div>
  );
}

export default App;
