import React from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

const App = () => {
   return(
    <div className="App">
      <h1> Hi, World! Hello!</h1>
      <button className="btn btn-primary">button</button>
    </div>
  );
}

export default hot(module)(App);
