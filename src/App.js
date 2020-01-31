import React, { Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error";
import { Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
