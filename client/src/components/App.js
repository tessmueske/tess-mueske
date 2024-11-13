import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Crimson from "./Crimson"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/crimson">
          <Crimson />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
        <div>404 Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
