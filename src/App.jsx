import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("hello world");
    setCount((prevelement) => {
      return prevelement * 5;
    });
  };

  return (
    <>
      <button onClick={handleIncrement}>hello</button>
      <p>{count}</p>
    </>
  );
}

export default App;
