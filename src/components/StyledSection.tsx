import styled from "styled-components/macro";

const StyledSection = styled.section<{ bright?: boolean }>`
  padding: 1rem;
  background-color: ${(props) => (props.bright ? "white" : "transparent")};
  margin-top: var(--nav-height);
  > :first-child {
    margin-bottom: 3rem;
    text-align: center;
  }
  > img {
    text-align: center;
    margin: auto;
  }
`;

export default StyledSection;
