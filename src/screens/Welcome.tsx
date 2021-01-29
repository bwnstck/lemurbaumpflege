import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
const Welcome: FunctionComponent = () => {
  const history = useHistory();
  return (
    <WelcomeContainer>
      <img src={Logo} alt="Lemur-Logo" />
      <hr />
      <h1>Baumpflege</h1>

      <button onClick={() => history.push("/aboutme")}>Auf gehts!</button>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  height: 100vh;
  margin-top: var(--nav-height);
  scroll-margin-top: var(--nav-height);
  display: grid;
  place-content: center;
  text-align: center;
  img {
    height: 250px;
  }
  hr {
    margin: 1rem 0;
  }

  button {
    margin: 1rem 4rem;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    border: none;
  }
`;

export default Welcome;
