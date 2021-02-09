import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components/macro";
import Lemur from "../assets/logo.png";
import StyledLink from "./StyledLink";
import { isMobile } from "../lib/responsiveHelpers";

const Navbar: FunctionComponent = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [open, setOpen] = useState(false);

  console.log(open);

  window.addEventListener("resize", () =>
    isMobile() ? setMobile(true) : setMobile(false)
  );

  return (
    <NavContainer>
      <StyledLink to="/">
        <img src={Lemur} alt="Lemur" />
      </StyledLink>
      {!mobile && (
        <ul className="NavBar">
          <li>
            <StyledLink to="/aboutMe">Über mich</StyledLink>
          </li>
          <li>
            <StyledLink to="/skillz">Leistungen</StyledLink>
          </li>
          <li>
            <StyledLink to="/qualifikationen">Qualifikationen</StyledLink>
          </li>
          <li>
            <StyledLink to="/transparenz">Transparenz</StyledLink>
          </li>
          <li>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </li>
        </ul>
      )}
      {mobile && (
        <>
          <button onClick={() => setOpen(!open)}>Click</button>
          {/* <li>
            <StyledLink to="/aboutMe">Über mich</StyledLink>
          </li>
          <li>
            <StyledLink to="/skillz">Leistungen</StyledLink>
          </li>
          <li>
            <StyledLink to="/qualifikationen">Qualifikationen</StyledLink>
          </li>
          <li>
            <StyledLink to="/transparenz">Transparenz</StyledLink>
          </li>
          <li>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </li> */}
        </>
      )}
      <Sidebar open={open} />
    </NavContainer>
  );
};
const Sidebar = styled.div<{
  open: boolean;
  // onClick: VoidFunction;
}>`
  position: absolute;
  right: ${(props) => (props.open ? "0" : "-200px")};
  top: 70px;
  height: 100vh;
  width: 200px;
  background: red;
  z-index: 1;
`;

const NavContainer = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: var(--nav-height);
  box-shadow: 0 -2px 10px var(--bg-overlay);
  img {
    height: 50px;
    margin-right: 1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-right: 2rem;
    li > {
      a {
        transition: var(--transition);
        /* color: var(--text-primary); */
        text-decoration-color: transparent;
        :hover {
          text-decoration: underline solid var(--paradise-pink) 2px;
        }
      }
    }

    *:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export default Navbar;
