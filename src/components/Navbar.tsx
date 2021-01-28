import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Lemur from "../assets/logo.png";

const Navbar: FunctionComponent = () => {
  return (
    <NavContainer>
      <img src={Lemur} alt="Lemur" />
      <ul>
        <li>Wer bin ich</li>
        <li>Qualifikationen</li>
        <li>Leistungen</li>
        <li>Kontakt</li>
        <li>Impressum</li>
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
