import React from "react";
import "./header.scss";
import headerpic from "./header.jpg";

import { Image } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="header-pic"></div> */}
      <div className="section1-content">
        <span className="sub-content">Save Our Date</span>
        <h1 className="main-content">Lê Sang & Thanh Vân</h1>
        <span className="sub-content">24.12.2023</span>
      </div>
      {/* <a data-scroll className="fixed-button" href="#rsvp" id="rsvpButton">
        RSVP
      </a> */}
      <section className="section" id="section-1">
        <h2 className="sub-heading">Lễ cưới</h2>
        <p>Church wedding debt celebrate macarena embarrassing glitter Will.</p>
      </section>
    </div>
  );
};

export default Header;
