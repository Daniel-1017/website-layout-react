import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProgressBars from "./pages/ProgressBars/ProgressBars";
import Portfolio from "./pages/Portfolio/Portfolio";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <LandingPage />
      </Route>
      <Route path="/about-me">
        <ProgressBars />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </Fragment>
  );
};

export default App;
