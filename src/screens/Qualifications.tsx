import React, { FunctionComponent } from "react";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import styled from "styled-components/macro";
import PageWrapper from "../components/PageWrapper";

const Qualifications: FunctionComponent = () => {
  return (
    <PageWrapper>
      <h1>Qualifikationen</h1>
      <Notice>Pfeiltasten nutzen um Einträge zu springen</Notice>
      <QualiSection transparent>
        <Timeline />
      </QualiSection>
    </PageWrapper>
  );
};
const QualiSection = styled(Section)`
  padding: 1rem 0;
`;
const Notice = styled.p`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border 1px solid var(--paradise-pink);
  background: var(--text-primary);
  color: var(--paradise-pink);
  font-weight: bold;
  max-width:40ch;
  text-align:center;
  margin: auto;
  text-overflow:
`;
export default Qualifications;
