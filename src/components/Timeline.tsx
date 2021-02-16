import React, { FC } from "react";
import { Chrono } from "react-chrono";
import timelineData from "../lib/timelineData";
import Tree from "../assets/flaticons/tree-1.svg";
import FAW from "../assets/timeline/faw.jpg";
import Cyprus from "../assets/timeline/zypern.jpg";
import PSA from "../assets/timeline/psa.jpg";
import Chainsaw from "../assets/timeline/chainsaw.jpg";
import { isMobile } from "../lib/responsiveHelpers";

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
      // slideShow
      slideItemDuration={4000}
      scrollable={{ scrollbar: false }}
    >
      <div />
      <div />
      <div />
      <div />
      <div>{!isMobile() && <img src={FAW} height="250px" width="auto" />}</div>
      <div />
      <div />
      <div />
      <div>
        {!isMobile() && <img src={Cyprus} height="250px" width="auto" />}
      </div>
      <div>{!isMobile() && <img src={PSA} height="250px" width="auto" />}</div>
      <div>
        {!isMobile() && <img src={Chainsaw} height="250px" width="auto" />}
      </div>
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
        <img src={Tree} alt="image1" />
        <img src={Tree} alt="image1" />
      </div>
    </Chrono>
  );
};

export default Timeline;
