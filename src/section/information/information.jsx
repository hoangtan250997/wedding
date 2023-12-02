import React from "react";
import "./information.scss";
import Frame from "./frame.png";
const Info = () => {
  return (
    <div className="information">
      {/* <div className="frame"></div> */}
      <img className="frame" src={Frame} alt="" />
      <div className="content">
        <span className="title-content">Lễ Cưới</span>
        <span className="name-content">Lê Sang & Thanh Vân </span>
        <br />
        <span className="sub-content">
          <b className="bold-content">Kính mời</b> bạn và người thương đến tham dự và chia vui
        </span>
        <span className="sub-content">cùng với chúng tôi</span>
      <br />
        <span className="sub-content">
          Sự hiện diện của bạn là niềm vinh hạnh
        </span>
        <span className="sub-content">đối với gia đình chúng tôi</span>
      </div>
    </div>
  );
};

export default Info;
