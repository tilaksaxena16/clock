import React, { useState } from "react";
import "./App.css";

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UptadeTime = () => {

    time = new Date().toLocaleTimeString();
    setCtime(time);

  }

  setInterval(UptadeTime, 1000);

  return (
    <>
      <div className="container">
        <h1>{ctime}</h1>
      </div>
    </>
  )
}

export { App }