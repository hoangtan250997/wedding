import React, { useState } from "react";
import { Radio, Timeline } from "antd";
import "./event.scss";

const Event = () => {
  const [mode, setMode] = useState("left");

  return (
    <div className="event">
      <div className="content">
        <h1 className="main-content">Sự kiện</h1>
      </div>
      <Timeline
        style={{ wireframe: true }}
        mode={mode}
        items={[
          {
            label: "2015-09-01",
            children: "Create a services",
          },
          {
            label: "2015-09-01 09:12:11",
            children: "Solve initial network problems",
          },
          {
            children: "Technical testing",
          },
          {
            label: "2015-09-01 09:12:11",
            children: "Network problems being solved",
          },
        ]}
      />
    </div>
  );
};

export default Event;
