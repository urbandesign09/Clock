import React from "react";
import Clock from "./container/Clock";
import Title from "./components/Title";
import Credit from "./container/Credit";
import "./styles.css";
import memegirl from "./assets/memegirl.jpg";

//create a light and dark mode here
export default function App() {
  const ImgStr = 'url("' + memegirl + '")';
  return (
    <div className="App" style={{ backgroundImage: ImgStr }}>
      <div className="Function-Side">
        <Title />
        <Clock />
        <Credit />
      </div>
    </div>
  );
}
