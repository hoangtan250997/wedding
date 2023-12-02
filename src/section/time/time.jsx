import React, { useState, useEffect } from "react";
import "./time.scss";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Card } from "antd";
import { colors } from "@mui/material";
import Fab from "@mui/material/Fab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <div className="content">
        <span className="main-content">Đám cưới của chúng mình</span>
        <h1 className="sub-content">Ngày 24 tháng 12 năm 2023</h1>
        {/* <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <>
              <span className="time-content"> {timeLeft.seconds} </span>
            </>
          }
        ></Card>
        <Paper
          sx={{
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          {" "}
          <span className="time-content"> {timeLeft.minutes} </span>
          <span> {timeLeft.minutes} </span>
        </Paper>{" "}
        <Fab
          variant="extended"
          sx={{
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          <span className="time-content"> {timeLeft.seconds}</span>
          <span> phutút</span>
        </Fab> */}
        <Row className="timer"
        >
          <Col xs={3} md={3}>
            <span className="time-content">{timeLeft.days} </span>
            <span className="sub-content">ngày</span>
          </Col>
          <Col xs={3} md={3}>
            <span className="time-content">{timeLeft.hours} </span>
            <span className="sub-content">giờ</span>
          </Col>
          <Col xs={3} md={3}>
            <span className="time-content">{timeLeft.minutes} </span>
            <span className="sub-content">phút</span>
          </Col>
          <Col xs={3} md={3}>
            <span className="time-content">{timeLeft.seconds} </span>
            <span className="sub-content">giây</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Time;
