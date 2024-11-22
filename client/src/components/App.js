import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Resume from "./Resume"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
        <div>404 Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
