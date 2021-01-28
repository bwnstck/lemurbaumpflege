import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BG from "../assets/background.png";

const Welcome: FunctionComponent = () => {
  const history = useHistory();
  return (
    <WelcomeContainer>
      <h1>Lemur Baumpflege</h1>
      <hr />
      <button onClick={() => history.push("/aboutme")}>Auf gehts!</button>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  height: 100vh;
  margin-top: var(--nav-height);
  scroll-margin-top: var(--nav-height);
  /* background: url(${BG}); */

  display: grid;
  place-content: center;
  button {
    margin: 1rem 4rem;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    border: none;
  }
`;

export default Welcome;
