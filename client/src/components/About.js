import React from "react";
import { Link } from "react-router-dom";
import photo from "../photo.jpg"

function About() {
    const profPhoto = {
        width: "300px",
        height: "auto",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: "15px",
    };

    return (
        <div className="about-container">
            <h1>about me</h1>
            
            <div className="about-card">
                <img
                    style={profPhoto}
                    src={photo}
                    alt="tess, a long-haired white woman, wearing a pink dress and smiling at the camera, holding a glass of red wine."
                />
                <p className="intro">
                    hi, i'm tess mueske! i'm a twenty-something from minnesota, currently located in madrid. i'm currently a full-stack developer intern with Ama Earth Group, a climate tech startup. i'm building out our new website as we launch our first AI-powered product. 
                </p>
            </div>

            <div className="about-card">
                <h2>background</h2>
                <p>
                    i have a bachelor of arts from the university of minnesota - twin cities, where i studied individualized studies and specialized in religious studies; gender, women, and sexuality studies; and human health and wellness. i used to live in los angeles, and while i was there, i became a certified postpartum doula. i worked as a professional matchmaker for three years, and i was the lead singer of a band called <a href="https://open.spotify.com/artist/6dis94dcZj1eQMA0ZaUxNP?si=vTRXWGqnTkmnPoD7JsI-tQ" target="_blank" rel="noopener noreferrer">girlfriend on the moon</a>.
                </p>
                <p>
                    i've written a few things that i'm proud of (<a href="https://www.harnessmagazine.com/on-making-it-my-identity-no-i-will-not-tell-you-about-the-people-ive-had-sex-with-and-why-we-should-have-more-lesbian-bars/" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://www.harnessmagazine.com/shucking-corn-on-the-porch-vegan-meats-walmart-acrylics-on-being-a-midwestern-femme-in-los-angeles/" target="_blank" rel="noopener noreferrer">here</a>, for example). i've also had a couple of poems published.
                </p>
            </div>

            <div className="about-card">
                <h2>currently...</h2>
                <p>i'm a full-stack developer, learning spanish and drinking wine in madrid. i'm seeking a full-time software development role in madrid, new york, or other major world cities.</p>
                <p>
                    i'm a woman, a lesbian, a full-stack coder, a spanish-speaker, a world traveler (28 countries and counting), and a fan of body modifications, indie rock, and halloween. i believe in using tech to make the world better. <a href="https://www.linkedin.com/in/tess-mueske/" target="_blank" rel="noopener noreferrer">take a look at my linkedin here.</a>
                </p>
            </div>

            <Link to="/" className="button-link">home</Link>
        </div>
    );
}

export default About;
