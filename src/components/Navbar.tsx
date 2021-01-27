import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Lemur from "../assets/logo.png";
// type NavbarProps = {
//   children: ReactNode;
// };
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
  display: flex;
  align-items: center;
  padding: 1rem;
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
