import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import "./style.css"
import data from "./data";

export default function App() {
    const cards = data.map(item => {
       // <Hero />
        
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
            
        )
    })        
    

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
           
            
        </div>
    )

}