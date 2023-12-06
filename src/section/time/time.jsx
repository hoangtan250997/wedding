import React, { useState, useEffect } from "react";
import "./time.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import timePic from "./time.jpg";
const Time = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date("2023-12-24") - new Date();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="time">
      <img src={timePic} alt="" id="time-pic" />
      <span className="main-content" id="title">
        Đám cưới của chúng mình
      </span>

      <div className="content">
        <h1 className="sub-content">24 - 12 - 2023</h1>
        <Row></Row>
        <Row className="timer">
          <Col style={{ padding: "0" }}>
            <span className="time-content">{timeLeft.days} </span>
            <span className="sub-content">ngày</span>
          </Col>
          <Col>
            <span className="time-content">{timeLeft.hours} </span>
            <span className="sub-content">giờ</span>
          </Col>
          <Col>
            <span className="time-content">{timeLeft.minutes} </span>
            <span className="sub-content">phút</span>
          </Col>
          <Col>
            <span className="time-content">{timeLeft.seconds} </span>
            <span className="sub-content">giây</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Time;
