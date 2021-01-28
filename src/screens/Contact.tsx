import React, { FC } from "react";
import styled from "styled-components";
import StyledSection from "../components/StyledSection";

const Contact: FC = () => {
  return (
    <ContactWrapper>
      <h1>Kontakt</h1>
      <p>Schreiben Sie mir einfach eine Mail oder rufen Sie mich an!</p>
      <a href="mailto:info@lemurbaumpflege.de">info[at]lemurbaumpflege.de</a>
      <a href="tel:+4971319999">Gültige TelNummer einfügen</a>
    </ContactWrapper>
  );
};
const ContactWrapper = styled(StyledSection)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Contact;
