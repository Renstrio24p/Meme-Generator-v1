import React from "react";
import './meme.css';
import MemeNav from "./components/navbar";
import MemeHero from "./components/hero";


export default function Meme(){
    return (
        <div className="meme-container">
            <div className="overlay"></div>
            <MemeNav />
            <MemeHero />
        </div>
    )
}