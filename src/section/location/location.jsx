import React from "react";
import "./location.scss";
import Image from "react-bootstrap/Image";

import Sang from "./Sang.jpg";
import Van from "./Van1.jpg";
import Map1 from "./Map1.png";
import Map2 from "./Map2.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const Location = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);

  return (
    <div className="location">
      <Row>
        <Col xs={6} md={6}>
          <Row>
            <img id="Sang" src={Sang} alt="" />
          </Row>
          <Row>
            <div className="content">
              <p className="main-content">Nhà trai</p>
              <p className="sub-content">11:00 Chủ nhật, ngày 24/12/2023</p>
              <p className="sub-content">(Tức ngày 12 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">
                Tại:{" "}
                <b className="bold-content">
                  Nhà máy cao su Long Thành
                </b>
              </p>
              <p className="sub-content">Khu 14 xã Long Đức, LT, ĐN</p>
            </div>{" "}
            <Button
              className="icon"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.google.com/maps/place/Nh%C3%A0+m%C3%A1y+m%E1%BB%A7+-+n%C3%B4ng+tr%C6%B0%E1%BB%9Dng+cao+su+Long+Th%C3%A0nh/@10.8097945,106.9581717,17z/data=!3m1!4b1!4m6!3m5!1s0x31751f028c87a8dd:0xf7813d10238a6df1!8m2!3d10.8097945!4d106.9581717!16s%2Fg%2F11c5zcw2nf?entry=ttu"
                );
              }}
              id="location-button"
            >
              Mở bản đồ
            </Button>
            <Modal open={open1} onClose={handleClose1}>
              <Box sx={style}>
                <Image id="Van" src={Map1} sx={style}></Image>
              </Box>
            </Modal>
          </Row>
        </Col>
        <Col xs={6} md={6}>
          <Row>
            <img id="Van" src={Van} alt="" />
            <div className="content">
              <p className="main-content">Nhà Gái</p>
              <p className="sub-content">11:00 Thứ bảy, ngày 23/12/2023</p>
              <p className="sub-content">(Tức ngày 11 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">
                Tại: <b className="bold-content">Tư gia</b>
              </p>
              <p className="sub-content">Ấp xóm Đình, xã Bình Sơn, LT, ĐN</p>
            </div>{" "}
            <Button
              className="icon"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.google.com/maps/place/10%C2%B047'35.8%22N+107%C2%B001'05.7%22E/@10.7932778,107.01825,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.7932778!4d107.01825?entry=t"
                );
              }}
              id="location-button"
            >
              Mở bản đồ
            </Button>
            <Modal open={open2} onClose={handleClose2}>
              <Box sx={style}>
                <Image id="Van" src={Map2} sx={style}></Image>
              </Box>
            </Modal>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
