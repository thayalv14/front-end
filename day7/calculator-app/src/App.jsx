import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const buttons = [
    "C", "⌫", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "⌫") {
      setInput(input.slice(0, -1));
      return;
    }

    if (value === "=") {
      try {
        const result = eval(input);
        setHistory((prev) => [...prev, `${input} = ${result}`]);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
      return;
    }

    setInput((prev) => prev + value);
  };

  return (
    <div className="container">
      <div className="calculator">

        <div className="display">
          {input}
        </div>

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="btn"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="history">
          <h3>History</h3>

          {history.length === 0 ? (
            <p>No calculations yet</p>
          ) : (
            history.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;