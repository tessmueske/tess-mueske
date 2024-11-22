import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Home(){
    return (
        <div className="center-container">
          <h1>welcome to tess mueske's portfolio</h1>
          <Link to="/projects">projects</Link>
          <br />
          <Link to="/about">about me</Link>
          <br></br>
          <Link to="/resume">resume (CV)</Link>
          <br></br>
          <Link to="/contact">contact</Link>
        </div>
      );
    }

export default Home;