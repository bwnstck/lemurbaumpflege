import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

// import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Welcome from "./screens/Welcome";
import Footer from "./components/Footer";
import Skillz from "./screens/Skillz";
import AboutMe from "./screens/AboutMe";
import Qualifications from "./screens/Qualifications";
import Impress from "./screens/Impress";
import Contact from "./screens/Contact";

const App: FunctionComponent = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <Wrapper> */}
      <Switch>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/skillz">
          <Skillz />
        </Route>
        <Route path="/qualifikationen">
          <Qualifications />
        </Route>
        <Route path="/impressum">
          <Impress />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
      {/* </Wrapper> */}
      <Footer />
    </Router>
  );
};

export default App;
