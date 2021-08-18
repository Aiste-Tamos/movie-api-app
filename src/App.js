import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { AboutPage } from "./components";
import { FilmsPage } from "./components";
import { MainPage } from "./components/mainPage/MainPage";


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/films">
          <FilmsPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
