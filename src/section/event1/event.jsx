import React, { useState } from "react";
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./event.scss";

const Event = () => {
  return (
    <div className="event">
      <div className="content">
        <h1 className="main-content">Sự kiện</h1>
      </div>
      <MDBContainer className="py-5">
        <div className="main-timeline-4 text-white">
          <div className="timeline-4 left-4">
            <MDBCard className="gradient-custom">
              <MDBCardBody className="p-4">
                <p className="content">Ăn hỏi</p>
                <p className="content">09:00 - 28/05/2023</p>
                <p className="content">Nhà gái</p>
                <p className="content">Ấp xóm Đình, xã Bình Sơn, LT.</p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline-4 right-4">
            <MDBCard className="gradient-custom-4">
              <MDBCardBody className="p-4">
                <p className="content">Lễ vu quy</p>
                <p className="content">11:30 - 23/12/2023</p>
                <p className="content">Nhà gái</p>
                <p className="content">Ấp xóm Đình, xã Bình Sơn, LT, ĐN</p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline-4 left-4">
            <MDBCard className="gradient-custom">
              <MDBCardBody className="p-4">
                <p className="content">Lễ rước dâu</p>
                <p className="content">09:00 - 24/12/2023</p>
                <p className="content">Nhà trai</p>
                <p className="content">37 tổ 10 khu 14 xã Long Đức, LT, ĐN</p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline-4 right-4">
            <MDBCard className="gradient-custom-4">
              <MDBCardBody className="p-4">
                <p className="content">Đám cưới</p>
                <p className="content">11:30 - 24/12/2023</p>
                <p className="content">Nhà trai</p>
                <p className="content">37 tổ 10 khu 14 xã Long Đức, LT, ĐN</p>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Event;
