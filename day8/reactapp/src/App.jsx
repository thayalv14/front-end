import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgClass, setBgClass] = useState("reset-bg");

  const increase = () => {
    setCount(count + 1);
    setBgClass("increase-bg");
  };

  const decrease = () => {
    setCount(count - 1);
    setBgClass("decrease-bg");
  };

  const reset = () => {
    setCount(0);
    setBgClass("reset-bg");
  };

  return (
    <div className={`container ${bgClass}`}>
      <div className="counter-box">
        <h2>Counter Application</h2>

        <span className="count">{count}</span>

        <div className="buttons">
          <button className="increase-btn" onClick={increase}>
            Increase
          </button>

          <button className="decrease-btn" onClick={decrease}>
            Decrease
          </button>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;