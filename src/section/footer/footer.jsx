import React from "react";
import "./footer.scss";
import FooterImage from "./Footer.jpg"
const Footer = () => {
  return (
    <div className="background">
      {/* <div className="pic"></div> */}
      <img src={FooterImage} className="footer-pic" alt="" />
      {/* <div className="section1-content">
        <span className="sub-content">Save Our Date</span>
        <h1 className="main-content">Lê Sang & Thanh Vân</h1>
        <span className="sub-content">24.12.2023</span>
      </div> */}
      {/* <a data-scroll className="fixed-button" href="#rsvp" id="rsvpButton">
        RSVP
      </a> */}
    </div>
  );
};

export default Footer;
