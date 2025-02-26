import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(){
    return (
        <div className="center-container">
          <h1 className="home-title">welcome to tess mueske's portfolio</h1>
          <div className="links-container">
            <Link to="/about" className="button-link">about me</Link>
            <Link to="/projects" className="button-link"> technical projects</Link>
            <Link to="/resume" className="button-link">resume (CV)</Link>
            <a href="https://dev.to/tessmueske" className="button-link" target="_blank" rel="noopener noreferrer">
                my blog
            </a>
            <a href="https://github.com/tessmueske" className="button-link" target="_blank" rel="noopener noreferrer">
                my github
            </a>
            <Link to="/contact" className="button-link">contact me</Link>
          </div>
        </div>
    );
}

export default Home;