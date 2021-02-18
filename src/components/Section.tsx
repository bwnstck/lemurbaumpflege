import styled from "styled-components/macro";

const Section = styled.section<{ transparent?: boolean }>`
  max-width: 100ch;
  padding: 1rem 1.5rem;
  margin: 1rem auto;

  background-color: ${(props) =>
    props.transparent ? "transparent" : "var(--text-primary)"};
  border: ${(props) => (props.transparent ? "none" : "1px solid black")};
  border-radius: 5px;
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    text-align: center;
  }

  > img {
    text-align: center;
    margin: auto;
  }
`;

export default Section;
