import React from "react";
import { Link } from "react-router-dom";
import resume from "../Tess_Mueske_Resume copy.pdf"

function Resume(){
    return (
        <div className="center-container">
            <a href={resume} target="_blank" rel="noopener noreferrer">
                click here to download a pdf copy of my resume/CV
            </a>
            <br></br>
            <Link to="/">home</Link>
        </div>
    )
}

export default Resume;