import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "../aboutPage/AboutPage";
import { FilmsPage } from "../filmsPage";

import { Navigation } from "../navigation";

import "./mainPage.scss";

export const MainPage = () => {
  const mainClass = "main-page";
  const footerClass = `${mainClass}__footer`;

  return (
    <>
      <Router>
        <div className={mainClass}>
          <Navigation />
          <Switch>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/films">
              <FilmsPage />
            </Route>
          </Switch>
          <p className={footerClass}>
            Photo by{" "}
            <a href="https://unsplash.com/@yehoshuaas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Josué AS
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/starwars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </Router>
    </>
  );
};
