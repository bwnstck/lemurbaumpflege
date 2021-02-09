import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/macro";
import Lemur from "../assets/logo.png";
import StyledLink from "./StyledLink";
import { isMobile } from "../lib/responsiveHelpers";

const Navbar: FunctionComponent = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  console.log(open);

  window.addEventListener("resize", () =>
    isMobile() ? setMobile(true) : setMobile(false)
  );

  const navItems = [
    { name: "Über mich", link: "aboutMe" },
    { name: "Leistungen", link: "skillz" },
    { name: "Qualifikationen", link: "qualifikationen" },
    { name: "Transparenz", link: "transparenz" },
    { name: "Kontakt", link: "kontakt" },
  ];

  return (
    <NavContainer>
      <StyledLink to="/">
        <img src={Lemur} alt="Lemur" onClick={() => setIsActive("")} />
      </StyledLink>
      {!mobile && (
        <ul className="NavBar">
          {navItems.map((item) => (
            <ListElement
              key={item.link}
              active={isActive === item.link}
              onClick={() => setIsActive(item.link)}
            >
              <StyledLink to={`/${item.link}`}>{item.name}</StyledLink>
            </ListElement>
          ))}
        </ul>
      )}
      {mobile && (
        <>
          <Burger open={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </Burger>
        </>
      )}
      <Sidebar open={open}>
        <ul onClick={() => setOpen(!open)}>
          {navItems.map((item) => (
            <ListElement
              key={item.link}
              active={isActive === item.link}
              onClick={() => setIsActive(item.link)}
            >
              <StyledLink to={`/${item.link}`}>{item.name}</StyledLink>
            </ListElement>
          ))}
        </ul>
      </Sidebar>
    </NavContainer>
  );
};

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
    }

    *:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;
const ListElement = styled.li<{
  active: boolean;
  onClick: () => void;
}>`
  a {
    transition: var(--transition);
    text-decoration-color: transparent;
    ${(props) =>
      props.active &&
      "text-decoration: underline solid var(--paradise-pink) 2px;"}
    :hover {
      text-decoration: underline solid var(--paradise-pink) 2px;
    }
  }
`;

const Sidebar = styled.div<{
  open: boolean;
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

const Burger = styled.div<{
  open?: boolean;
}>`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  > * {
    position: absolute;
    background: black;
    height: 4px;
    border-radius: 5px;
    width: 100%;
    transition: transform 0.5s ease-in-out, background 0.5s ease-in-out;
  }
  > :nth-child(1) {
    top: 10px;
    left: 0;
    background: var(--eton-blue);
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    transform-origin: top left;
  }
  > :nth-child(2) {
    top: 20px;
    left: 0;
    background: ${({ open }) =>
      open ? "transparent" : "var(--russian-green)"};
  }
  > :nth-child(3) {
    top: 30px;
    left: 0;
    background: var(--text-dark);
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    transform-origin: top left;
  }
`;

export default Navbar;
