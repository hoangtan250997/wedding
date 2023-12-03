import React, { useState } from "react";
import "./footer.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import footerPic from "./Footer.jpg";
const Footer = () => {
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };
  return (
    <div className="background">
    <img src={footerPic} alt="" className="footerPic"/>
        <Form className="invitation-form" >
        <div  id="group">
          <h1 className="name-content">Bạn sẽ đến chứ</h1>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Row>
              <Col xs={2} md={2}></Col>
              <Col xs={8} md={8}>
                <Form.Check
                  value="design"
                  type="radio"
                  aria-label="radio 1"
                  label="Chúng mình sẽ đến tham dự vào ngày 23/12 (Tiệc Nhà Gái)"
                  className="check"
                  onChange={handleChange}
                  checked={kindOfStand === "gai"}
                />
                <Form.Check
                  value="food"
                  type="radio"
                  aria-label="radio 2"
                  label=" Chúng mình sẽ đến tham dự vào ngày 24/12 (Tiệc Nhà Trai)"
                  onChange={handleChange}
                  checked={kindOfStand === "trai"}
                  className="check"
                />
                <Form.Check
                  value="khong"
                  type="radio"
                  aria-label="radio 2"
                  label="Tiếc quá, chúng mình không đến tham dự được rồi"
                  onChange={handleChange}
                  checked={kindOfStand === "khong"}
                  className="check"
                />
              </Col>
              <Col xs={2} md={2}></Col>
            </Row>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail" id="name">
                <Form.Label id="name-title">Tên của bạn</Form.Label>
                <Form.Control type="email" id="name-place" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                id="name"
              >
                <Form.Label id="name-title">Số điện thoại</Form.Label>
                <Form.Control type="text" id="name-place" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <InputGroup id="happy">
              <InputGroup.Text id="happy-title">Lời chúc</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                id="happy-content"
              />
            </InputGroup>
          </Row>
          <Button variant="containeried" type="submit" id="submit-button">
            <MailOutlineIcon></MailOutlineIcon>
          </Button>
          </div>
        </Form>
    </div>
  );
};

export default Footer;
