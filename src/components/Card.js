import React from "react";
import Star from "../img/star.png";

export default function Card(props) {
  return (
    <div className="card">
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img
        src={require(`../img/${props.img}`)} className="card--image" alt="Card Image"></img>
      <div className="card--stats">
        <img src={Star} className="card--star" alt="Star"></img>
        <span className="space">{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>

    <div className="card--ad--title">
      <p>{props.title}</p> 
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
      </div>
    </div>
  );
}