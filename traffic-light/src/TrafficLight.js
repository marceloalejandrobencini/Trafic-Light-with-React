import React, { useState } from 'react';
import './TrafficLight.css'; // Archivo de estilos

const TrafficLight = () => {
  const [color, setColor] = useState(null);

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="traffic-light-container">
      <div className="pole"></div>
      <div className="traffic-light">
        <div
          className={color === "red" ? "light red selected" : "light red"}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={color === "yellow" ? "light yellow selected" : "light yellow"}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={color === "green" ? "light green selected" : "light green"}
          onClick={() => handleClick("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
