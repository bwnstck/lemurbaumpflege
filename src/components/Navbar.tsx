import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Lemur from "../assets/logo.png";
import StyledLink from "./StyledLink";

const Navbar: FunctionComponent = () => {
  return (
    <NavContainer>
      <StyledLink to="/">
        <img src={Lemur} alt="Lemur" />
      </StyledLink>
      <ul>
        <li>
          <StyledLink to="/aboutMe">Wer bin ich</StyledLink>
        </li>
        <li>
          <StyledLink to="/qualifikationen">Qualifikationen</StyledLink>
        </li>
        <li>
          <StyledLink to="/skillz">Leistungen</StyledLink>
        </li>
        <li>
          <StyledLink to="/transparenz">Transparenz</StyledLink>
        </li>
        <li>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
        </li>
      </ul>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--primary);
  display: flex;
  align-items: center;
  padding: 1rem;
  height: var(--nav-height);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

  img {
    height: 50px;
    margin-right: 1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    *:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export default Navbar;
