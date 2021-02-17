import React, { FC, ReactNode } from "react";
import styled from "styled-components/macro";
import { Parallax } from "react-parallax";
import Forest from "../assets/forestbackground.jpg";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Parallax
      blur={{ min: -100, max: 100 }}
      bgImage={Forest}
      bgImageAlt="Forest"
      strength={-300}
    >
      <WrapperContainer>{children}</WrapperContainer>;
    </Parallax>
  );
};

const WrapperContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem clamp(1rem, 800px, 10rem);
  overflow: auto;
  ::-webkit-scrollbar {
    background: transparent;
  }
`;
export default Wrapper;
