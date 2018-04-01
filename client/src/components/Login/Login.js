import React, { Component } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
    	<div classNameName="container">
    		<h1 className="soundify">SOUNDIFY</h1>
			<form className="loginForm" method="post" action="/main">
				<label>
					<input type="text" id="userName" name="userName" required />
					<div className="label-text">Username</div>
				</label>
				<label>
			    	<input type="text" id="password" name="password" required />
			    	<div className="label-text">Password</div>
				</label>
				<button className="loginSubmit">Submit</button>
				{/*<hr>
				<p>Login with:</p>
				<span>
       			<a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
   				<a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>					
				</span>*/}
				<div className="signUpSuggestion">Don't have login? <Link to="/signup" className="signUpLink">Sign up</Link></div>
			</form>

    	</div>
    );
  }
}

export default Login;