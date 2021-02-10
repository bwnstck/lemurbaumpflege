import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/macro";
import Lemur from "../assets/logo.png";
import StyledLink from "./StyledLink";
import { isMobile } from "../lib/responsiveHelpers";
import BurgerMenu from "./BurgerMenu";

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
      {mobile && <BurgerMenu open={open} onClick={() => setOpen(!open)} />}
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
interface IList {
  active: boolean;
  onClick: () => void;
}

const ListElement = styled.li<IList>`
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
interface ISidebar {
  open: boolean;
}
const Sidebar = styled.div<ISidebar>`
  transition: right 0.3s ease-in-out;
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

export default Navbar;
