import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/macro";

interface CardProps {
  children: ReactNode;
}
const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};
const CardWrapper = styled.div`
  position: relative;
  padding: 2rem 1rem 1rem;
  border: 2px solid var(--text-dark);
  margin: 1rem auto;
  border-radius: 5px;
  background: var(--text-primary);
  h3 {
    position: relative;
    display: flex;
    align-items: center;
    position: absolute;
    top: -3.5rem;
    background: var(--text-primary);
    border-radius: 5px;

    padding: 0.5rem 1rem;
    > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 32px;
      border: 2px solid var(--text-dark);
      border-bottom: none;
      border-radius: 5px 5px 0 0;
    }
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
