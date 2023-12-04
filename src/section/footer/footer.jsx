import React, { useState } from "react";
import "./footer.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import footerPic from "./Footer.jpg";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    num: "",
    choice: "",
    wish: "",
  });
  const isMinWidth850 = useMediaQuery({ minWidth: 1450 });

  const [item, setItem] = useState({ gai: "1", trai: "2", no: "0" });

  const { kindOfStand } = item;
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeOtion = (e) => {
    e.persist();
    console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };
  const handleSubmit = () => {
    // Here you can send the selected option to your API
    console.log("Selected Option:", formData);
    // Add your API call logic here
  };
  return (
    <div className="background">
      <img src={footerPic} alt="" className="footerPic" />
      <Form className="invitation-form">
        <div id="group">
          {isMinWidth850 ? (
            <>
              <h1 className="name-content">Bạn sẽ đến chứ</h1>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Row>
                  <Col xs={2} md={2}></Col>
                  <Col xs={8} md={8}>
                    <Form.Check
                      value={item.gai}
                      type="radio"
                      aria-label="radio 1"
                      label="Tham dự vào ngày 23/12 (Tiệc Nhà Gái)"
                      className="check"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.gai}
                    />
                    <Form.Check
                      value={item.trai}
                      type="radio"
                      aria-label="radio 2"
                      label="Tham dự vào ngày 24/12 (Tiệc Nhà Trai)"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.trai}
                      className="check"
                    />
                    <Form.Check
                      value={item.no}
                      type="radio"
                      aria-label="radio 2"
                      label="Không đến tham dự được rồi!"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.no}
                      className="check"
                    />
                  </Col>
                  <Col xs={2} md={2}></Col>
                </Row>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    id="name"
                  >
                    <Form.Label id="name-title">Tên của bạn</Form.Label>
                    <Form.Control
                      type="text"
                      id="name-place"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                    id="name"
                  >
                    <Form.Label id="name-title">Số điện thoại</Form.Label>
                    <Form.Control
                      type="text"
                      id="name-place"
                      value={formData.num}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </>
          ) : (
            <Row>
              <Col xs={8} md={8}>
                <h1 className="name-content">Bạn sẽ đến chứ</h1>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Row>
                    <Form.Check
                      value={item.gai}
                      type="radio"
                      aria-label="radio 1"
                      label="Tham dự vào ngày 23/12 (Tiệc Nhà Gái)"
                      className="check"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.gai}
                    />
                    <Form.Check
                      value={item.trai}
                      type="radio"
                      aria-label="radio 2"
                      label="Tham dự vào ngày 24/12 (Tiệc Nhà Trai)"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.trai}
                      className="check"
                    />
                    <Form.Check
                      value={item.no}
                      type="radio"
                      aria-label="radio 2"
                      label="Không đến tham dự được rồi!"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.no}
                      className="check"
                    />
                  </Row>
                </Form.Group>
              </Col>

              <Col xs={4} md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  id="name"
                >
                  <Form.Label id="name-title">Tên của bạn</Form.Label>
                  <Form.Control type="email" id="name-place" />
                </Form.Group>

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
          )}
          <Row>
            <InputGroup id="happy">
              <InputGroup.Text id="happy-title">Lời chúc</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                id="happy-content"
                rows={2}
              />
            </InputGroup>
          </Row>
          <Button
            variant="containeried"
            // type="submit"
            id="submit-button"
            onClick={handleSubmit}
          >
            <MailOutlineIcon></MailOutlineIcon>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Footer;
