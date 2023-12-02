import React, { useState } from "react";
import "./footer.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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
    <Card className="div-form">
      <Form className="invitation-form">
        <h1 className="name-content">Bạn sẽ đến chứ</h1>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
        
            value="design"
            type="radio"
            aria-label="radio 1"
            label="Có, tôi sẽ đến tham dự"
            className="check"

            onChange={handleChange}
            checked={kindOfStand === "design"}
          />
          <Form.Check
            value="food"
            type="radio"
            aria-label="radio 2"
            label="Xin lỗi, chúng tôi không tham dự được"
            onChange={handleChange}
            checked={kindOfStand === "food"}
            className="check"
          />
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
      </Form>
      </Card>
    </div>
  );
};

export default Footer;
