import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
}
const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};
const CardWrapper = styled.div`
  position: relative;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  h3 {
    display: flex;
    align-items: center;
    position: absolute;
    top: -1.4rem;
    background: var(--primary);
    padding: 0 0.5rem;
    img {
      height: 40px;
      margin: auto 0.5rem;
      filter: drop-shadow(1px 1px 1px black);
    }
  }
  ul {
    margin-top: 0.5rem;
  }
`;
export default Card;
