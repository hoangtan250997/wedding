import React from "react";
import "./footer.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = () => {
  return (
    <div className="background">
      <Form className="form">
        <Row>
          <Form.Label>Bạn sẽ đến chứ</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="radio" label="Có, tôi sẽ đến tham dự" />
            <Form.Check
              type="radio"
              label="Xin lỗi, chúng tôi không tham dự được"
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên của bạn</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <InputGroup>
            <InputGroup.Text>Lời chúc</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            Gửi
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Footer;
