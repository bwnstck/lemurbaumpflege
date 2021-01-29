import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/macro";

interface WrapperProps {
  children: ReactNode;
}
const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

const WrapperContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem clamp(0.1rem, 2vw, 1rem);
  overflow: auto;
`;
export default Wrapper;
