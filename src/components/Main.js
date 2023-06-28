import React from "react";
import ReactDOM from 'react-dom';
import photoGrid from "../img/photoGrid.png"


export default function() {
    return (
        <section className="hero">
            <img src={photoGrid} className="hero--photo" alt="Photo Grid"></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}