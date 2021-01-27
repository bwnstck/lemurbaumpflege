import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
}
const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};
const CardWrapper = styled.div`
  background-color: var(--text-primary);
  /* width: 400px; */
  /* height: min-content; */
  padding: 1rem;
  margin: 1rem;
`;
export default Card;
