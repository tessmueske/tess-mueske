import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

function About(){
    return (
        <div className="center-container">
            <p>hi, i'm tess mueske. i'm a twenty-something from minnesota, currently located in madrid. i spent four years wearing glitter and sequins in los angeles, too. 
            
            i have a bachelor of arts from the university of minnesota - twin cities, where i studied individualized studies and specialized in religious studies; gender, women, and sexuality studies; and human health and wellness.</p>
            <br></br>
            <Link to="/">home</Link>
        </div>
    )
}

export default About;