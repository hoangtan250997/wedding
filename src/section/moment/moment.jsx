import React from "react";
import "./moment.scss";
import Image from "react-bootstrap/Image";
import Van from "./van.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function Moment() {
  return (
    <div className="moment">
      <div className="content">
        <h1 className="main-content">Khoảnh khắc bên nhau</h1>
      </div>
      <Row>
        <Col xs={4} md={4} className="piccol">
          <Image id="Van" src={Van} rounded />
          <Image id="Van" src={Van} rounded />
        </Col>
        <Col xs={4} md={4} className="piccol">
          <Image id="Van" src={Van} rounded />
          <Image id="Van" src={Van} rounded />
        </Col>
        <Col xs={4} md={4} className="piccol">
          <Image id="Van" src={Van} rounded />
          <Image id="Van" src={Van} rounded />
        </Col>
      </Row>
    </div>
  );
}
