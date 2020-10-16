import React from "react";

class Timer extends React.Component {
  render() {
    const breakStyle = {
      background: "dimgrey",
      color: "white"
    };
    const pauseStyle = {
      background: "orange"
    };
    const display = this.props.time;
    const minute = ("0" + Math.floor(display / 60)).slice(-2);
    const seconds = ("0" + Math.floor(display % 60)).slice(-2);

    return (
      <div id="timer">
        <h4
          id="timer-label"
          style={this.props.label === "Break" ? breakStyle : null}
        >
          {this.props.label}
        </h4>
        <h1 id="time-left">
          {minute}:{seconds}
        </h1>
        <div id="trigger-buttons">
          <button
            id="start_stop"
            className="timer-button"
            onClick={this.props.onClick2}
            value="timer"
            style={this.props.startPause === "Pause" ? pauseStyle : null}
          >
            {this.props.startPause}
          </button>
          <button
            id="reset"
            value="timer"
            className="timer-button"
            onClick={this.props.onClick}
          >
            Reset
          </button>
        </div>
        <audio
          className="clip"
          id="beep"
          src={this.props.audio}
          type="audio/mp3"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Timer;
