import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

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
  padding: 1rem;
`;
export default Wrapper;
