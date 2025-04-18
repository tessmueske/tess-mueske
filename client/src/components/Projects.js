import React from "react";
import { Link } from "react-router-dom";

function Projects(){
    return (
        <div className="project-container">
            <h1>projects overview</h1>
            <p>i have experience with javascript, react, html, css, python, flask, sqlalchemy, and render for cloud deployment. i've worked with orms, full crud, restful routing, json-based data structures, and flask apis. i also have experience with formik for form validations on the frontend, bcrypt for password hashing, flask mail extension for account verification, and formspree integration for contact forms. i've tested apis using postman, and i've used git and github for version control. i have experience with cursor ai, and i've used npm and pip for package management.</p>

            <div className="project-card">
                <h1>ama earth group website</h1>
                <p>i led a complete ux/ui overhaul of a climate tech startup's website using react and javascript coupled with cursor ai to reduce development time by 70% for our ai-powered environmental intelligence platform. i improved frontend performance and accessibility, ensuring compliance with WCAG 2.1 and ARIA standards. collaborating with a global team, i used git and github for version control, npm for package management, and render for cloud deployment.</p>
                <a href="https://amaearthgroup.com" className="button-link" target="_blank" rel="noopener noreferrer">
                    check out the website
                </a>
            </div>
            
            <div className="project-card">
                <h1>crimson</h1>
                <p>crimson, a non-gendered period tracking application. crimson fills a gap in the menstruation tracking app space. the apps on the market use gendered language, either for bodies or for products. this project does not.</p>
                <p>crimson uses a javascript + react frontend with a fully functional backend, incorporating python with flask and flask-sqlalchemy and restful api routing. it uses form for form validations, and it's deployed using render. for secure authentication, the project uses bcrypt for password hashing.</p>
                <a href="https://youtu.be/W725zgQJ5uI" className="button-link" target="_blank" rel="noopener noreferrer">
                    watch demo video
                </a>
            </div>

            <div className="project-card">
                <h1>magwa</h1>
                <p>a travel app for the canary islands focusing on sustainable tourism and local businesses. built with javascript + react with a python + flask backend, using flask sessions for session management, flask mail extension for account verification, hashtag filtering, 5 python models, over 20 client- and server- side routes.</p>
                <a href="https://youtu.be/jhYRwhRkjqY" className="button-link" target="_blank" rel="noopener noreferrer">
                    watch demo video
                </a>
            </div>
            
            <Link to="/" className="button-link">home</Link>
        </div>
    )
}

export default Projects;