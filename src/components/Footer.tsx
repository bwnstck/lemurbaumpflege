import { FunctionComponent } from "react";
import styled from "styled-components";

const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      <span>
        Made with ❤️ by <a href="weinstock.it">bwnstck</a>
      </span>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  display: grid;
  place-content: center;
  padding: 1rem;
`;
export default Footer;
