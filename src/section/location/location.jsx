import React from "react";
import "./location.scss";
import Image from "react-bootstrap/Image";
import Van from "./van.jpg";

const Location = () => {
  return (
    <div className="sample">
      <Image src={Van} roundedCircle id="Van" />

      {/* <div className="header-pic"></div>
      <div className="section1-content">
        <span className="sub-content">Save Our Date</span>
        <h1 className="main-content">Lê Sang & Thanh Vân</h1>
        <span className="sub-content">24.12.2023</span>
      </div>
      {/* <a data-scroll className="fixed-button" href="#rsvp" id="rsvpButton">
        RSVP
      </a> */}
    </div>
  );
};

export default Location;
