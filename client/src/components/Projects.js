import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

function Projects(){
    return (
        <div className="center-container">
            <h1> crimson </h1>
            <a href="https://my-period-app.onrender.com/" target="_blank" rel="noopener noreferrer">
                check it out here.
            </a>
            <p>crimson, a non-gendered period tracking application. crimson fills a gap in the menstruation tracking app space. the apps on the market use gendered language, either for bodies or for products. this project does not.
                
            crimson uses a Javascript + React frontend with a fully functional backend, incorporating Python with Flask and Flask-SQLAlchemy and RESTful API routing. it uses Formik for form validations, and it's deployed using render. for secure authentication, the project uses Bcrypt for password hashing.</p>

            <h1> magwa </h1>
            <p>a travel app for the canary islands focusing on sustainable tourism and local businesses. coming soon.</p>
            <Link to="/">home</Link>
        </div>
    )
}

export default Projects;