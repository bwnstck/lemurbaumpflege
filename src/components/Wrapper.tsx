import React, { FC, ReactNode } from "react";
import styled from "styled-components/macro";
import { Parallax } from "react-parallax";
import Forest from "../assets/forestbackground.jpg";
import ForestSmall from "../assets/forestbackground_small.jpg";
import useProgressiveImg from "../lib/useProgressiveImg";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const [src, { blur }] = useProgressiveImg(ForestSmall, Forest);

  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={src}
      bgImageAlt="Forest"
      strength={-200}
      style={{
        filter: blur ? "blur(15px)" : "none",
        transition: "filter 0.3s ease-out",
      }}
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
`;
export default Wrapper;
