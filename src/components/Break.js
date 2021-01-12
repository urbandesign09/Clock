import React from "react";

function Break(props) {
  return (
    <div id="break" className="module">
      <div id="break-label">
        <h4>Break</h4>
      </div>
      <div className="counter-input">
        <button
          onClick={props.onClick}
          id="break-increment"
          className="counter-button"
          value="break"
        >
          +
        </button>
        <h1 id="break-length">{props.value}</h1>
        <button
          onClick={props.onClick}
          id="break-decrement"
          className="counter-button"
          value="break"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Break;
