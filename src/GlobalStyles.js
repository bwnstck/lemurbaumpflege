import { createGlobalStyle } from "styled-components/macro";
import ForestBackground from "./assets/forestbackground.jpg";
const GlobalStyle = createGlobalStyle`
  :root {
    /* CSS HSL */
    --baby-powder: hsla(84, 15%, 94%, 1);
    --honeydew: hsla(101, 30%, 89%, 1);
    --eton-blue: hsla(112, 28%, 74%, 1);
    --russian-green: hsla(142, 19%, 47%, 1);
    --rich-black-forest: hsla(212, 59%, 9%, 1);
    --prussian-blue: hsla(210, 53%, 15%, 1);
    --medium-champagne: hsla(48, 67%, 79%, 1);
    --paradise-pink: hsla(349, 78%, 62%, 1);
    --bg-overlay: hsla(212, 59%, 9%, .5);
    --bg-overlay2: hsla(84, 15%, 94%, .3);

    --primary: var(--eton-blue);
    --text-primary: var(--baby-powder);
    --text-dark: var(--rich-black-forest);
    --nav-height: 75px;
    --transition: all 0.3s ease-in-out;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
    min-height: 100vh;
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
    letter-spacing: 0.2rem;
    margin: 1.5rem auto 1rem;
  }
  h1{
    font-size: 2rem;
  }

  p {
    line-height: 2;
    max-width: 70ch;
    margin: auto;
  }
  a, b{
    color: var(--paradise-pink);
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
