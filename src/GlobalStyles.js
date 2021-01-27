import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #a7bc8f;
    --text-primary: white;
    --text-dark: black;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #root {
    min-height: 100vh;
     background-color: var(--primary);
  }

  body {
    font-family: "Raleway", sans-serif;
    color: var(--text-primary-dark);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    letter-spacing: .2rem;
  }
  ul{
    list-style-type: none;
  }
`;

export default GlobalStyle;
