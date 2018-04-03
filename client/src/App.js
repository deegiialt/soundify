import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Player from "./components/Player";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import dbConfig from'./db.js';
// import mongoose from 'mongoose';

// mongoose.connect(dbConfig.url);
// var passport = require('passport');
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
//   done(null, user._id);
// });
 
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

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
