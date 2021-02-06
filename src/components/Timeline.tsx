import React, { FC } from "react";
import { Chrono } from "react-chrono";
import timelineData from "../lib/timelineData";
import Tree from "../assets/flaticons/tree-1.svg";

const Timeline: FC = () => {
  return (
    <Chrono
      items={timelineData}
      theme={{
        primary: "var(--russian-green)",
        secondary: "var(--text-primary)",
        cardBgColor: "var(--text-primary)",
        cardForeColor: "var(--text-dark)",
      }}
      mode="VERTICAL_ALTERNATING"
      slideShow
      slideItemDuration={4000}
      scrollable={{ scrollbar: false }}
    >
      <div className="chrono-icons">
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
      </div>
    </Chrono>
  );
};

export default Timeline;
