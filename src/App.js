import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

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
    </Fragment>
  );
};

export default App;
