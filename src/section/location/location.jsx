import React from "react";
import "./location.scss";
import Image from "react-bootstrap/Image";
import Van from "./van.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Location = () => {
  return (
    <div className="location">
      <Row>
        <Col xs={6} md={6}>
          <Row>
            <Image id="Sang" src={Van} roundedCircle />
          </Row>
          <Row>
            <div className="content">
              <h1 className="main-content">Nhà trai</h1>
              <p className="sub-content">11:30 Chủ nhật, ngày 24/12/2023</p>
              <p className="sub-content">(Tức ngày 12 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">
                Tại:Khuôn viên Nhà máy cao su Long Thành Khu 14 xã Long Đức, LT,
                ĐN
              </p>
            </div>{" "}
          </Row>
        </Col>
        <Col xs={6} md={6}>
          <Row>
            <Image id="Van" src={Van} roundedCircle />
          </Row>
          <Row>
            <div className="content">
              <h1 className="main-content">Nhà Gái</h1>
              <p className="sub-content">11:30 Thứ bảy, ngày 23/12/2023</p>
              <p className="sub-content">(Tức ngày 11 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">
                Tại: Tư Gia Ấp xóm Đình, xã Bình Sơn, LT, ĐN
              </p>
            </div>{" "}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
