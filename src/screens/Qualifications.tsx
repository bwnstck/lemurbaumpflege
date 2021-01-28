import React, { FunctionComponent } from "react";
import styled from "styled-components";
import StyledSection from "../components/StyledSection";
import Timeline from "../components/Timeline";

const Qualifications: FunctionComponent = () => {
  return (
    <QualificationWrapper bright>
      <h2>Qualifikationen</h2>
      <Timeline />
    </QualificationWrapper>
  );
};

const QualificationWrapper = styled(StyledSection)``;

export default Qualifications;
