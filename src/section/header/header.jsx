import React from "react";
import "./header.scss";
import { Wave } from "react-animated-text";

const Header = () => {
  return (
    <div className="header">
      {/* <img src={header} alt="" id="header-pic"/> */}
      <div className="content">
        <span className="sub-content">Save Our Date</span>
        {/* <Wave text="Lê Sang & Thanh Vân" className="main-content" /> */}

        <h1 className="main-content">Lê Sang & Thanh Vân</h1>
        <span className="sub-content">24.12.2023</span>
      </div>
      {/* <a data-scroll className="fixed-button" href="#rsvp" id="rsvpButton">
        RSVP
      </a> */}
    </div>
  );
};

export default Header;
