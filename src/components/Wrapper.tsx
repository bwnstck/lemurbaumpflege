import React, { FC, ReactNode } from "react";
import styled from "styled-components/macro";
import { Parallax } from "react-parallax";
import Forest from "../assets/forestbackground.svg";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Parallax
      // blur={{ min: -15, max: 15 }}
      bgImage={Forest}
      bgImageAlt="Forest"
      strength={-300}
    >
      <WrapperContainer>{children}</WrapperContainer>;
    </Parallax>
  );
};

const WrapperContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 1rem clamp(0.1rem, 2vw, 1rem);
  overflow: auto;
`;
export default Wrapper;
