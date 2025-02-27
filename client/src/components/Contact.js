import React from "react";
import { Link } from "react-router-dom";

function Contact(){
    return (
        <div className="center-container">
            <h1>let's connect!</h1>
            <div className="contact-content">
                <div className="contact-card">
                    <div className="contact-method">
                        <h2>email</h2>
                        <a href="mailto:tessmueske@gmail.com" className="contact-link">
                            tessmueske@gmail.com
                        </a>
                    </div>
                    
                    <div className="contact-method">
                        <h2>phone</h2>
                        <div className="phone-links">
                            <a href="tel:+34663357874" className="contact-link">Spain: +34 663 357 874</a>
                            <a href="tel:+16129617734" className="contact-link">USA: +1 612-961-7734</a>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className="button-link">home</Link>
        </div>
    )
}

export default Contact;