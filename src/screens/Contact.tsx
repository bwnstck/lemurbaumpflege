import React, { FC } from "react";
import styled from "styled-components/macro";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import Mail from "../assets/mail2.svg";

const Contact: FC = () => {
  return (
    <ContactWrapper>
      <h1>Kontakt</h1>
      <Section>
        <p>Sie erreichen mich am besten per Mail!</p>
        <a href="mailto:info@lemurbaumpflege.de">
          <img src={Mail} alt="Mail me" />
          info@lemurbaumpflege.de
        </a>
      </Section>
      <Section>
        <p>Oder schreiben Sie mir einen Brief an:</p>
        <p>
          <b>Lemur Baumpflege</b>
        </p>
        <p>Christoph Mössinger</p>
        <p>Hansjakobstraße. 4</p>
        <p>74074 Heilbronn</p>
      </Section>
    </ContactWrapper>
  );
};
const ContactWrapper = styled(PageWrapper)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 1rem;
    height: 50px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default Contact;
