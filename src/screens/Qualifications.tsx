import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import StyledSection from "../components/StyledSection";
import Timeline from "../components/Timeline";

const Qualifications: FunctionComponent = () => {
  return (
    <QualificationWrapper>
      <h2>Qualifikationen</h2>
      <div>
        <Timeline />
      </div>
    </QualificationWrapper>
  );
};

const QualificationWrapper = styled(StyledSection)`
  min-height: 75vh;
  position: relative;
  > div {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    width: auto;
  }
`;

export default Qualifications;
