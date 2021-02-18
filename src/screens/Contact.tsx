import React, { FC } from "react";
import styled from "styled-components/macro";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

const Contact: FC = () => {
  return (
    <ContactWrapper>
      <h1>Kontakt</h1>
      <Section>
        <p>Schreiben Sie mir einfach eine Mail oder rufen Sie mich an!</p>
        <a href="mailto:info@lemurbaumpflege.de">info[at]lemurbaumpflege.de</a>
        <a href="tel:+4971319999">Gültige TelNummer einfügen</a>
      </Section>
    </ContactWrapper>
  );
};
const ContactWrapper = styled(PageWrapper)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Contact;
