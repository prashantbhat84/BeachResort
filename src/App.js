import React, { Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error";
import { Route, Link } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </Fragment>
  );
}

export default App;
