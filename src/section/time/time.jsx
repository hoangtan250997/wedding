import React, { useState, useEffect } from "react";
import "./time.scss";

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
        <span className="main-content">
          {" "}
          {timeLeft.days} ngày {timeLeft.hours} giờ {timeLeft.minutes} phút{" "}
          {timeLeft.seconds} giây
        </span>
      </div>
    </div>
  );
};

export default Time;
