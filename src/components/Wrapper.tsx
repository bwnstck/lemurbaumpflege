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
      blur={{ min: -30, max: 30 }}
      bgImage={Forest}
      bgImageAlt="Forest"
      strength={-200}
    >
      <WrapperContainer>{children}</WrapperContainer>;
    </Parallax>
  );
};

const WrapperContainer = styled.div`
  height: 100vh;
  margin-top: var(--nav-height);
  padding: 0 1rem;
  overflow: auto;
  ::-webkit-scrollbar {
    background: transparent;
  }
`;
export default Wrapper;
