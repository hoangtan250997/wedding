import React from "react";

import "./moment.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import R11 from "./R1-1.jpg";
import R12 from "./R1-2.jpg";
import R13 from "./R1-3.jpg";
import R21 from "./R2-1.jpg";
import R22 from "./R2-2.jpg";
import R23 from "./R2-3.jpg";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import ModalImage from "react-modal-image";

export default function Moment() {
  return (
    <div className="moment">
      <div className="content">
        <h1 className="main-content">Khoảnh khắc bên nhau</h1>
      </div>
      <Row>
        <Col xs={4} md={4} className="piccol">
          <Card>
            <CardActionArea>
              <ModalImage small={R11} large={R11} alt="Hello World!" />;
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <ModalImage small={R21} large={R21} alt="Hello World!" />;
            </CardActionArea>
          </Card>
        </Col>
        <Col xs={4} md={4} className="piccol">
          <Card>
            <CardActionArea>
              <ModalImage small={R12} large={R12} alt="Hello World!" />;
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <ModalImage small={R22} large={R22} alt="Hello World!" />;
            </CardActionArea>
          </Card>
        </Col>
        <Col xs={4} md={4} className="piccol">
          <Card>
            <CardActionArea>
              <ModalImage small={R13} large={R13} alt="Hello World!" />;
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <ModalImage small={R23} large={R23} alt="Hello World!" />;
            </CardActionArea>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
