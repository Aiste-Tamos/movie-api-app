import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "../aboutPage/AboutPage";
import { FilmsPage } from "../filmsPage";

import { Navigation } from "../navigation";

import "./mainPage.scss";

export const MainPage = () => {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/films">
              <FilmsPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
