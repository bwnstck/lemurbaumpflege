import React, { FC } from "react";
import { Chrono } from "react-chrono";
import timelineData from "../lib/timelineData";
import Lemur from "../assets/logo.png";
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
      scrollable={{ scrollbar: true }}
    >
      <div />
      <div />
      <div>
        {!isMobile() && <img src={Chainsaw} height="200px" width="auto" />}
      </div>
      <div />
      <div>{!isMobile() && <img src={FAW} height="200px" width="auto" />}</div>
      <div>
        {!isMobile() && <img src={Lemur} height="200px" width="auto" />}
      </div>
      <div />
      <div />
      <div>
        {!isMobile() && <img src={Cyprus} height="200px" width="auto" />}
      </div>
      <div>{!isMobile() && <img src={PSA} height="200px" width="auto" />}</div>
      {/* <div className="chrono-icons">
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
        <img src={Tree} alt="image1" /0
      </div> */}
    </Chrono>
  );
};

export default Timeline;
