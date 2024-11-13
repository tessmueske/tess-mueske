import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About"
import Crimson from "./Crimson"

function Home(){
    return (
        <div className="center-container">
          <h1>welcome to tess mueske's portfolio</h1>
          <Link to="/crimson">projects</Link>
          <br />
          <Link to="/about">about tess</Link>
        </div>
      );
    }

export default Home;