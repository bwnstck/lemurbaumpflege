import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import StyledLink from "./StyledLink";

const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      <StyledLink to="impressum">Impressum</StyledLink>
      <span>
        Made with ❤️ by <a href="weinstock.it">weinstock.it</a>
      </span>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  display: grid;
  place-content: center;
  text-align: center;
  padding: 1rem;
  background-color: var(--text-dark);
  color: var(--text-primary);
  a {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
`;
export default Footer;
