import React from "react";
import { Link } from "react-router-dom";
import photo from "../photo.jpg"

function Contact(){
    return (
        <div className="center-container">
            <p>i would love to hear from you!</p>
            <p>email: tessmueske@gmail.com</p>
            <p>phone: +34 663 357 874 (ES)</p>
            <p>+1 612-961-7734 (US)
            </p>
        <Link to="/">home</Link>
        </div>
    )
}

export default Contact;