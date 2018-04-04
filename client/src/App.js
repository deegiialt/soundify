import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Player from "./components/Player";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Nav} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/main" component={Player} />
        </div> 
      </Router>
    );
  }
}

export default App;
