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
              <p className="main-content">Nhà trai</p>
              <p className="sub-content">11:30 Chủ nhật, ngày 24/12/2023</p>
              <p className="sub-content">(Tức ngày 12 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">
                Tại:Khuôn viên Nhà máy cao su Long Thành
              </p>
              <p className="sub-content">Khu 14 xã Long Đức, LT, ĐN</p>
            </div>{" "}
          </Row>
        </Col>
        <Col xs={6} md={6}>
          <Row>
            <Image id="Van" src={Van} roundedCircle />
          </Row>
          <Row>
            <div className="content">
              <p className="main-content">Nhà Gái</p>
              <p className="sub-content">11:30 Thứ bảy, ngày 23/12/2023</p>
              <p className="sub-content">(Tức ngày 11 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">Tại: Tư Gia</p>
              <p className="sub-content">Ấp xóm Đình, xã Bình Sơn, LT, ĐN</p>
            </div>{" "}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
