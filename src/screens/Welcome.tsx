import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Logo from "../assets/logo.png";
import Login from "../assets/flaticons/login.svg";

const Welcome: FunctionComponent = () => {
  const history = useHistory();
  return (
    <WelcomeContainer>
      <img src={Logo} alt="Lemur-Logo" />
      <h1>Baumpflege</h1>
      <hr />
      <h2>Christoph Mössinger</h2>
      <button onClick={() => history.push("/aboutme")}>
        <img src={Login} alt="login" />
      </button>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  height: calc(100vh - var(--nav-height));
  margin-top: var(--nav-height);
  scroll-margin-top: var(--nav-height);
  display: grid;
  place-content: center;
  text-align: center;
  img {
    height: 200px;
    height: clamp(120px, 20vw, 250px);
    margin: auto;
  }
  hr {
    margin: 0.1rem 0;
    color: var(--primary);
  }
  h1,
  h2 {
    margin: 0.5rem auto;
  }
  h2 {
    color: var(--text-primary);
    font-size: 1.5rem;
    text-shadow: 0 0 5px var(--text-dark);
  }
  button {
    margin: 1rem 4rem;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    border: none;
    background: none;
    img {
      height: 50px;
      transition: var(--transition);
      :hover {
        filter: drop-shadow(0 0 1px var(--text-primary));
        transform: scale(1.1);
      }
    }
  }
`;

export default Welcome;
