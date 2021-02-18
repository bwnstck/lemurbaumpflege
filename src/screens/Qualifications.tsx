import React, { FunctionComponent } from "react";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import styled from "styled-components/macro";

const Qualifications: FunctionComponent = () => {
  return (
    <Section transparent>
      <h1>Qualifikationen</h1>
      <Notice>
        <p>Pfeiltasten nutzen um Einträge zu springen</p>
      </Notice>
      <Timeline />
    </Section>
  );
};

const Notice = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border 1px solid var(--paradise-pink);
  background: var(--text-primary);
  color: var(--paradise-pink);
  font-weight: bold;
  width: 400px;
  margin: auto;
`;
export default Qualifications;
