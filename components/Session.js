import React from "react";

function Session(props) {
  return (
    <div className="module">
      <div id="session-label">
        <h4>Session</h4>
      </div>
      <div className="counter-input">
        <button
          onClick={props.onClick}
          id="session-increment"
          className="counter-button"
          value="session"
        >
          +
        </button>
        <h1 id="session-length">{props.value}</h1>
        <button
          onClick={props.onClick}
          id="session-decrement"
          className="counter-button"
          value="session"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Session;
