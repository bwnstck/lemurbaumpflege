import styled from "styled-components/macro";

interface IBurger {
  open?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const BurgerMenu = ({ open, onClick }: IBurger): JSX.Element => {
  // const BurgerMenu:FC<IBurger> = ({ open }) => {
  return (
    <Burger open={open} onClick={onClick}>
      <span />
      <span />
      <span />
    </Burger>
  );
};

const Burger = styled.div<IBurger>`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  > span {
    position: absolute;
    background: black;
    height: 4px;
    width: 100%;
    border-radius: 5px;
    transition: transform 0.5s ease-in-out, background 0.5s ease-in-out;
  }
  > :nth-child(1) {
    top: 10px;
    left: 0;
    background: var(--eton-blue);
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    transform-origin: top left;
  }
  > :nth-child(2) {
    top: 20px;
    left: 0;
    background: ${({ open }) =>
      open ? "transparent" : "var(--russian-green)"};
  }
  > :nth-child(3) {
    top: 30px;
    left: 0;
    background: var(--text-dark);
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    transform-origin: top left;
  }
`;
export default BurgerMenu;
