import React, { FunctionComponent, useState } from "react";
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
        </>
      )}
      <Sidebar open={open}>
        <ul onClick={() => setOpen(!open)}>
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
      </Sidebar>
    </NavContainer>
  );
};
const Sidebar = styled.div<{
  open: boolean;
  // onClick: VoidFunction;
}>`
  transition: right 0.5s ease-in-out;
  position: absolute;
  right: ${(props) => (props.open ? "0" : "-100%")};
  top: var(--nav-height);
  height: 100vh;
  width: 100%;
  background: var(--text-primary);
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    li {
      margin: 1rem;
    }
  }
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
