import React from "react";
import "./location.scss";
import Image from "react-bootstrap/Image";

import Van from "./Van.jpg";
import Sang from "./Sang.jpg";
import Map1 from "./Map1.png";
import Map2 from "./Map2.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const Location = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <div className="location">
      <Row>
        <Col xs={6} md={6}>
          <Row>
            <img id="Sang" src={Sang} alt="" />
            {/* <Image id="Sang" src={Van} roundedCircle /> */}
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
            <Button
              className="icon"
              variant="contained"
              onClick={handleOpen1}
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
            {/* <Image id="Van" src={Van} roundedCircle /> */}
            <div className="content">
              <p className="main-content">Nhà Gái</p>
              <p className="sub-content">11:30 Thứ bảy, ngày 23/12/2023</p>
              <p className="sub-content">(Tức ngày 11 tháng 11 năm Quý Mão)</p>
              <br />
              <p className="sub-content">Tại: Tư Gia</p>
              <p className="sub-content">Ấp xóm Đình, xã Bình Sơn, LT, ĐN</p>
            </div>{" "}
            <Button
              className="icon"
              variant="contained"
              onClick={handleOpen2}
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
