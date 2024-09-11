import React, { useState } from "react";
import "./App.css";

const App2 = () => {
  const [isOn, setIsON] = useState(false);

  const togglelight = () => {
    setIsON((prev) => !prev);
  };

  return (
    <div className={`container ${isOn ? "light-on" : "light-off"}`}>
      <h1>light is {isOn ? "on" : "off"} </h1>
      <button onClick={togglelight}>turn {isOn ? "off" : "on"}</button>
    </div>
  );
};

export default App2;
