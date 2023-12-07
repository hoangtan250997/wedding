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
import axios from "axios";

const Footer = () => {
  const [responseData, setResponseData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    num: "",
    checked: "",
    wish: "",
  });

  //Axios
  const axiosConfig = {
    method: "post",
    url: "http://14.225.255.185:8081/wedding/api/guest",
    headers: {
      "Content-Type": "application/json",
    },
    data: formData,
  };

  const isMinWidth850 = useMediaQuery({ minWidth: 1450 });

  const [item, setItem] = useState({ gai: "1", trai: "2", no: "0" });

  const { kindOfStand } = item;
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeOtion = (e) => {
    e.persist();
    console.log(e.target.value);
    formData.checked = e.target.value;
    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (form.checkValidity()) {
      try {
        console.log(axiosConfig);
        const response = await axios(axiosConfig);
        setResponseData(response.data);
        window.alert("Cảm ơn bạn!");
        document.write("Cảm ơn bạn!");

      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  return (
    <div className="background">
      <img src={footerPic} alt="" className="footerPic" />
      <Form
        className="invitation-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div id="group">
          {isMinWidth850 ? (
            <>
              <h1 className="name-content">Bạn sẽ đến chứ</h1>

              <Row>
                <Col xs={2} md={2}></Col>
                <Col xs={8} md={8}>
                  <Form.Group
                    className="mb-3"
                    controlId="validationCustom01"
                    id="check"
                    required
                  >
                    <Form.Check
                      value={item.gai}
                      type="radio"
                      aria-label="radio 1"
                      label="Tham dự vào ngày 23/12 (Tiệc Nhà Gái)"
                      className="check"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.gai}
                      required
                    />
                    <Form.Check
                      value={item.trai}
                      type="radio"
                      aria-label="radio 2"
                      label="Tham dự vào ngày 24/12 (Tiệc Nhà Trai)"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.trai}
                      className="check"
                      required
                    />
                    <Form.Check
                      value={item.no}
                      type="radio"
                      aria-label="radio 2"
                      label="Không đến tham dự được rồi!"
                      onChange={handleChangeOtion}
                      checked={kindOfStand === item.no}
                      className="check"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} md={2}></Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="validationCustom02"
                    id="name"
                  >
                    <Form.Label id="name-title">Tên của bạn</Form.Label>
                    <Form.Control
                      type="text"
                      id="name-place"
                      name="name"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid" id="required">
                      Vui lòng nhập tên của bạn.
                    </Form.Control.Feedback>
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
                      type="tel"
                      id="name-place"
                      name="num"
                      value={formData.num}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid" id="required">
                      Vui lòng nhập sđt của bạn.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </>
          ) : (
            <Row>
              <Col xs={8} md={8}>
                <h1 className="name-content">Bạn sẽ đến chứ</h1>
                <Form.Group className="mb-3">
                  <Form.Check
                    value={item.gai}
                    type="radio"
                    aria-label="radio 1"
                    label="Tham dự vào ngày 23/12 (Tiệc Nhà Gái)"
                    className="check"
                    onChange={handleChangeOtion}
                    checked={kindOfStand === item.gai}
                    isValid={kindOfStand === item.gai}
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
                  <Form.Control.Feedback type="invalid" id="required">
                    Please select an option
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col xs={4} md={4}>
                <Form.Group className="mb-3" id="name">
                  <Form.Label id="name-title">Tên của bạn</Form.Label>
                  <Form.Control
                    type="text"
                    id="name-place"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid" id="required">
                    Vui lòng nhập tên của bạn.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  id="name"
                >
                  <Form.Label id="name-title">Số điện thoại</Form.Label>
                  <Form.Control
                    type="tel"
                    id="name-place"
                    name="num"
                    value={formData.num}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid" id="required">
                    Vui lòng nhập sđt của bạn.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          )}
          <Row>
            <InputGroup id="happy">
              <InputGroup.Text id="happy-title">Lời chúc</InputGroup.Text>
              <Form.Control
                name="wish"
                as="textarea"
                aria-label="With textarea"
                id="happy-content"
                rows={2}
                onChange={handleChange}
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
