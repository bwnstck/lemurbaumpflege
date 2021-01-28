import React, { FunctionComponent } from "react";
import styled from "styled-components";
import BG from "../assets/background.png";

const Welcome: FunctionComponent = () => {
  return (
    <WelcomeContainer>
      <h1>Lemur Baumpflege</h1>
      <hr />
      <button>PUSH</button>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  height: 100vh;
  margin-top: var(--nav-height);
  scroll-margin-top: var(--nav-height);
  background: url(${BG});
  background-size: cover;
  background-position: center;
  display: grid;
  place-content: center;
`;

export default Welcome;
