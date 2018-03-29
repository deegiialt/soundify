import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Player from "./components/Player";

class App extends Component {
  render() {
    return (
      <div className="container">
      <Nav />
      <Player />
      </div>
    );
  }
}

export default App;
