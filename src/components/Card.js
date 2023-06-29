import React from "react";
import Star from "../img/star.png";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
        }
        else if (props.location === "Online") {
        badgeText = "ONLINE"
        }
  
    return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../img/${props.coverImg}`)} className="card--image" alt="Card Image"></img>
      <div className="card--stats">
        <img src={Star} className="card--star" alt="Star"></img>
        <span className="space">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
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