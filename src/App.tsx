import React, { FunctionComponent } from "react";
import GlobalStyle from "./GlobalStyles";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Welcome from "./screens/Welcome";
import Footer from "./components/Footer";
import Skillz from "./screens/Skillz";
import AboutMe from "./screens/AboutMe";
import Qualifications from "./screens/Qualifications";
import Impress from "./screens/Impress";

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Welcome />
      <Wrapper>
        <AboutMe />
        <Skillz />
        <Qualifications />
        <Impress/>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
