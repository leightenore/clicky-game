import React from "react";
import "./style.css";

function Title(props) {
  return <nav className="nav nav-justified navbar fixed-top navbar-expand-lg bg-dark shadow-sm">
  <span className="nav-item" id="title">Clicky Game</span>
  <div className="nav-item" >Score: {props.score}  |  High Score: {props.highscore}</div>
</nav>
}
export default Title;
