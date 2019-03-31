import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card" id="card" onClick={() => props.handleClick(props.id, props.clicked)} data-id={props.clicked}>
        <img alt={props.name} src={props.image}  /> 
    </div>
  );
}

export default AnimalCard;
