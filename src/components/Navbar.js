import React from "react";
import ReactDOM from 'react-dom';
import airbnbLogo from "../img/airbnb-logo.png"

export default function() {
    return (
        <nav>
            <img src={airbnbLogo} className="airbnb--logo" alt="Airbnb Logo"></img>
        </nav>
    )
}