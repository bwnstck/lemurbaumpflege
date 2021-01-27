import React, { FunctionComponent } from "react";
import GlobalStyle from "./GlobalStyles";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Welcome from "./screens/Welcome";
import Footer from "./components/Footer";
import Skillz from "./screens/Skillz";
import AboutMe from "./screens/AboutMe";

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Welcome />
      <Wrapper>
        <AboutMe />
        <Skillz />
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
