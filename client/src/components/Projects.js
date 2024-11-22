import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

function Projects(){
    return (
        <div className="project-container">
            <h1>projects</h1>
            <p>i have experience with javascript, react, html, css, python, flask, sqlalchemy, and render for cloud deployment. i've worked with orms, full crud, restful routing, json-based data structures, and flask apis. i have experience with formik for form validations on the frontend, bcrypt for password hashing, flask mail extension for account verification, and formspree for contact forms.</p>
            <h1> crimson </h1>
            <a href="https://my-period-app.onrender.com/" target="_blank" rel="noopener noreferrer">
                check it out here.
            </a>
            <p>crimson, a non-gendered period tracking application. crimson fills a gap in the menstruation tracking app space. the apps on the market use gendered language, either for bodies or for products. this project does not.
                
            crimson uses a javascript + react frontend with a fully functional backend, incorporating python with flask and flask-sqlalchemy and restful api routing. it uses form for form validations, and it's deployed using render. for secure authentication, the project uses bcrypt for password hashing.</p>

            <h1> magwa </h1>
            <p>a travel app for the canary islands focusing on sustainable tourism and local businesses. coming soon.</p>
            <Link to="/">home</Link>
        </div>
    )
}

export default Projects;