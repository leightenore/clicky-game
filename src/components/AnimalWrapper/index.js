import React from "react";
import "./style.css";

function AnimalWrapper(props) {
  return <div className="animalWrapper">
  <p>How to Play: Click on a picture of a baby animal to earn points, but if you click the same image twice, you lose!</p>
  {props.children}
  </div>;
}

export default AnimalWrapper;