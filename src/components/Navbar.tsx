import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/macro";
import Lemur from "../assets/logo.png";
import Link from "./Link";
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
      <Link to="/">
        <img src={Lemur} alt="Lemur" onClick={() => setIsActive("")} />
      </Link>
      {!mobile && !open && (
        <ul>
          {navItems.map((item) => (
            <ListElement
              key={item.link}
              active={isActive === item.link}
              onClick={() => setIsActive(item.link)}
            >
              <Link to={`/${item.link}`}>{item.name}</Link>
            </ListElement>
          ))}
        </ul>
      )}
      {<BurgerMenu open={open} onClick={() => setOpen(!open)} />}
      {
        <Sidebar open={open}>
          <ul onClick={() => setOpen(!open)}>
            {navItems.map((item) => (
              <ListElement
                key={item.link}
                active={isActive === item.link}
                onClick={() => setIsActive(item.link)}
              >
                <Link to={`/${item.link}`}>{item.name}</Link>
              </ListElement>
            ))}
          </ul>
        </Sidebar>
      }
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

    *:not(:first-child) {
      position: relative;
      margin-left: 1.4rem;
      ::before {
        content: "•";
        position: absolute;
        left: -1rem;
        top: -10px;
        color: var(--paradise-pink);
        font-size: 2rem;
      }
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
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: calc(var(--letterSpacing) - 0.1rem);
    border-bottom: ${(props) => (props.active ? "2px" : "0px")} solid
      var(--paradise-pink);
    :hover {
      border-bottom: 2px solid var(--paradise-pink);
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
  height: calc(100vh - var(--nav-height));
  width: 100%;
  background: var(--text-dark);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    *:not(:first-child)::before {
      display: none;
    }
    li {
      margin: 1rem;
      a {
        color: var(--text-primary);
        font-size: 1.5rem;
      }
    }
  }
`;

export default Navbar;
