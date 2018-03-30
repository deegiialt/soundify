import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Player from "./components/Player";
import Upload from "./components/Upload";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Nav} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/" component={Player} />
        </div> 
      </Router>
    );
  }
}

export default App;
