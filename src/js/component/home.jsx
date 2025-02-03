import { useState } from "react";
import React from "react";

import "./styles.css"; // Asegúrate de definir estilos en un archivo CSS separado.

function trafficlight() {
  const [color, setColor] = useState(null);
  const randomColor = () => {
    const colors = ["red", "yellow", "green"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  return (
	<div className="container">
    <div className="traffic">
      <div
        className={`red light ${color === "red" ? "active" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`yellow light ${color === "yellow" ? "active" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`green light ${color === "green" ? "active" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
	<button className="btn btn-dark" onClick={randomColor}>
        Guess the color
      </button>
	</div>
  );
}

export default trafficlight;
