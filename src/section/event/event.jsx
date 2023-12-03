import React from "react";
import { Timeline } from "antd";
import "./event.scss";

export default function Event() {
  return (
    <div className="event">
      <div className="content">
        <h1 className="main-content">Sự kiện</h1>
      </div>
      <Timeline
        style={{ wireframe: true }}
        mode="alternate"
        items={[
          {
            children: (
              <>
                <p className="content-left" id="title">ĂN HỎI</p>
                <p className="content-left">09:00 - 28/05/2023</p>
                <p className="content-left">Nhà gái</p>
                <p className="content-left">Ấp xóm Đình, xã Bình Sơn, LT.</p>
              </>
            ),
          },
          {
            children: (
              <>
                <p className="content-right" id="title">LỄ VU QUY</p>
                <p className="content-right">11:00 - 23/12/2023</p>
                <p className="content-right">Nhà gái</p>
                <p className="content-right">
                  Ấp xóm Đình, xã Bình Sơn, LT, ĐN
                </p>
              </>
            ),
          },
          {
            children: (
              <>
                <p className="content-left" id="title">LỄ RƯỚC DÂU</p>
                <p className="content-left">09:00 - 24/12/2023</p>
                <p className="content-left">Nhà trai</p>
                <p className="content-left">
                  37 tổ 10 khu 14 xã Long Đức, LT, ĐN
                </p>
              </>
            ),
          },
          {
            children: (
              <>
                <p className="content-right" id="title">ĐÁM CƯỚI</p>
                <p className="content-right">11:00 - 24/12/2023</p>
                <p className="content-right">Nhà trai</p>
                <p className="content-right">
                  37 tổ 10 khu 14 xã Long Đức, LT, ĐN
                </p>
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
