import React from "react";
import Session from "../components/Session";
import Break from "../components/Break";
import Timer from "../components/Timer";
import alarm from "../assets/alarm.mp3";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5, //this is the break input
      session: 25, //this is the session input
      timeRemain: 1500, //this is time displayed & that counts down
      timerText: "Session", //this indicates which timer is displayed
      startStop: "Start", //this starts the countdown
      audio: alarm //this is the audio src
    };
    this.baseState = this.state;
    this.handleClick = this.handleClick.bind(this);
    this.onReset = this.onReset.bind(this);
    this.startButton = this.startButton.bind(this);
    this.countdown = this.countdown.bind(this);
    this.playAlarm = this.playAlarm.bind(this);
  }

  handleClick(e) {
    const id = e.target.id;
    const value = e.target.value;

    if (id === "reset") {
      return this.onReset(); //this resets to base state
    } else if (id === "break-increment" || id === "session-increment") {
      return this.increment(value); //this increments
    } else if (id === "break-decrement" || id === "session-decrement") {
      return this.decrement(value); //this decrements
    }
  }

  onReset() {
    clearInterval(this.decrementer);
    this.setState(this.baseState);
    const audioElement = document.getElementById("beep");
    if (!audioElement.paused) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }

  //redundant code - what can I do to simplify this?
  increment(value) {
    //this edits the timer if timerText is in right time mode
    if (value === "session" && this.state.timerText === "Session") {
      this.setState((prevState) => ({
        timeRemain:
          prevState.timeRemain < 3600
            ? prevState.timeRemain + 60
            : prevState.timeRemain
      }));
    } else if (value === "break" && this.state.timerText === "Break") {
      this.setState((prevState) => ({
        timeRemain:
          prevState.timeRemain < 3600
            ? prevState.timeRemain + 60
            : prevState.timeRemain
      }));
    }

    //this edits the control displays
    if (value === "break") {
      this.setState((prevState) => ({
        break: prevState.break < 60 ? prevState.break + 1 : prevState.break
      }));
    } else if (value === "session") {
      this.setState((prevState) => {
        return {
          session:
            prevState.session < 60 ? prevState.session + 1 : prevState.session
        };
      });
    }
  }

  //redundant code - what can I do to simplify this?
  decrement(value) {
    //this edits the timer if timerText is in the right mode
    if (value === "session" && this.state.timerText === "Session") {
      this.setState((prevState) => ({
        timeRemain:
          prevState.timeRemain > 60
            ? prevState.timeRemain - 60
            : prevState.timeRemain
      }));
    } else if (value === "break" && this.state.timerText === "Break") {
      this.setState((prevState) => ({
        timeRemain:
          prevState.timeRemain > 60
            ? prevState.timeRemain - 60
            : prevState.timeRemain
      }));
    }

    //this edits the control displays
    if (value === "break") {
      return this.setState((prevState) => {
        return {
          break: prevState.break > 1 ? prevState.break - 1 : prevState.break
        };
      });
    } else if (value === "session") {
      return this.setState((prevState) => {
        return {
          session:
            prevState.session > 1 ? prevState.session - 1 : prevState.session
        };
      });
    }
  }

  //when start button is hit
  startButton() {
    //Change Visual
    //Toggle to initiate interval
    this.setState((prevState) => ({
      startStop: prevState.startStop === "Start" ? "Pause" : "Start"
    }));

    if (this.state.startStop === "Start") {
      this.countdown();
    } else if (this.state.startStop === "Pause") {
      clearInterval(this.decrementer);
    }
  }

  countdown() {
    clearInterval(this.decrementer);
    this.decrementer = setInterval(() => {
      this.setState((prevState) => ({
        timeRemain: prevState.timeRemain - 1
      }));
    }, 1000);
  }

  playAlarm() {
    const audioElement = document.getElementById("beep");
    if (audioElement.paused) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timeRemain === 0) {
      this.playAlarm();
    }

    if (this.state.timerText === "Session" && this.state.timeRemain === -1) {
      this.setState((prevState) => ({
        timerText: "Break",
        timeRemain: prevState.break * 60
      }));
    }

    if (this.state.timerText === "Break" && this.state.timeRemain === -1) {
      this.setState((prevState) => ({
        timerText: "Session",
        timeRemain: prevState.session * 60
      }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.decrementer);
  }

  render() {
    return (
      <div id="clock">
        <div id="counter">
          <Break value={this.state.break} onClick={this.handleClick} />
          <Session value={this.state.session} onClick={this.handleClick} />
        </div>
        <Timer
          time={this.state.timeRemain} //the time that gets sent for display
          label={this.state.timerText}
          audio={this.state.audio}
          onClick={this.handleClick}
          onClick2={this.startButton}
          startPause={this.state.startStop}
        />
      </div>
    );
  }
}

export default Clock;
