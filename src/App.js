import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProgressBars from "./pages/ProgressBars/ProgressBars";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
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
        <Route path="/contact-me">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
