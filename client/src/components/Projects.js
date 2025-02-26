import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

function Projects(){
    return (
        <div className="project-container">
            <h1>projects</h1>
            <p>i have experience with javascript, react, html, css, python, flask, sqlalchemy, and render for cloud deployment. i've worked with orms, full crud, restful routing, json-based data structures, and flask apis. i have experience with formik for form validations on the frontend, bcrypt for password hashing, flask mail extension for account verification, and formspree for contact forms.</p>
            <h1> crimson </h1>
            <p>crimson, a non-gendered period tracking application. crimson fills a gap in the menstruation tracking app space. the apps on the market use gendered language, either for bodies or for products. this project does not.
                
            crimson uses a javascript + react frontend with a fully functional backend, incorporating python with flask and flask-sqlalchemy and restful api routing. it uses form for form validations, and it's deployed using render. for secure authentication, the project uses bcrypt for password hashing.</p>
            <a href="https://youtu.be/W725zgQJ5uI" target="_blank" rel="noopener noreferrer">
                check out a video walk-through here.
            </a>

            <h1> magwa </h1>
            <p>a travel app for the canary islands focusing on sustainable tourism and local businesses. built with javascript + react with a python + flask backend, using flask sessions for session management, flask mail extension for account verification, hashtag filtering, 5 python models, over 20 client- and server- side routes.</p>
            <a href="https://youtu.be/jhYRwhRkjqY" target="_blank" rel="noopener noreferrer">
                check out a video walk-through here.
            </a>
            <br></br>
            <Link to="/">home</Link>
        </div>
    )
}

export default Projects;