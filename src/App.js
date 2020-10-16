import React from "react";
import Clock from "../container/Clock";
import Title from "../components/Title";
import Credit from "../container/Credit";
import "./styles.css";

//create a light and dark mode here
export default function App() {
  return (
    <div className="App">
      <Title />
      <Clock />
      <Credit />
    </div>
  );
}
