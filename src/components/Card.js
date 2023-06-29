import React from "react";
import Star from "../img/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`../img/${props.img}`)} className="card--image" alt="Card Image"></img>
      <div className="card--stats">
        <img src={Star} className="card--star" alt="Star"></img>
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.country}</span>
      </div>

      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}