import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Logo from "../assets/logo.png";
import Chainsaw from "../assets/flaticons/chainsaw.svg";
import RotateOnHoverImg from "../components/RotateOnHoverImg";

const Welcome: FunctionComponent = () => {
  const history = useHistory();
  return (
    <WelcomeContainer>
      <img src={Logo} alt="Lemur-Logo" height="200" width="auto" />
      <h1>Baumpflege</h1>
      <hr />
      <h2>Christoph Mössinger</h2>
      <button onClick={() => history.push("/aboutme")}>
        <RotateOnHoverImg src={Chainsaw} alt="login" height="50" width="auto" />
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
    margin: 1rem auto;
    padding: 0.5rem;
    cursor: pointer;
    background: none;
    height: 5em;
    width: auto;
    border: none;

    img {
      height: 100%;
      transition: var(--transition);
    }
  }
`;

export default Welcome;
