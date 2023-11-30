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
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
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
              <CardMedia component="img" image={R11} />
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={R21} />
            </CardActionArea>
          </Card>
        </Col>
        <Col xs={4} md={4} className="piccol">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={R12} />
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={R22} />
            </CardActionArea>
          </Card>
        </Col>
        <Col xs={4} md={4} className="piccol">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={R13} />
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={R23} />
            </CardActionArea>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
