import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(){
    return (
        <div className="center-container">
          <h1>welcome to tess mueske's portfolio</h1>
          <div className="links-container">
            <Link to="/about">about me</Link>
            <Link to="/projects">projects</Link>
            <Link to="/resume">resume (CV)</Link>
            <a href="https://dev.to/tessmueske" target="_blank" rel="noopener noreferrer">
                my blog
            </a>
            <a href="https://github.com/tessmueske" target="_blank" rel="noopener noreferrer">
                my github
            </a>
            <Link to="/contact">contact</Link>
          </div>
        </div>
    );
}

export default Home;