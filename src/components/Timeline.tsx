import React, { FC } from "react";
import { Chrono } from "react-chrono";
import timelineData from "../lib/timelineData";

const Timeline: FC = () => {
  return (
    <Chrono
      items={timelineData}
      mode="VERTICAL"
      slideShow
      slideItemDuration={4000}
      scrollable={{ scrollbar: false }}
    />
  );
};

export default Timeline;
