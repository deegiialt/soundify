import React, { Component } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
    	<div classNameName="container">
    		<div id="preloader_1">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className="row">
				<div className="col-md-4"></div>
	    		<h1 className="soundify col-md-4">SOUNDIFY</h1>
	    	</div>
			<div id="preloader_1">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>

    		<div className="row">
    			<div className="col-md-4"></div>
				<form className="loginForm col-md-4">
					<label>
						<input type="text" id="userName" name="userName" required />
						<div className="label-text">Username</div>
					</label>
					<label>
				    	<input type="text" id="password" name="password" required />
				    	<div className="label-text">Password</div>
					</label>
					<Link to="/main"><button className="loginSubmit">Submit</button></Link>
					{/*<hr>
					<p>Login with:</p>
					<span>
	       			<a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
	   				<a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>					
					</span>*/}
					<div className="signUpSuggestion">Don't have login? <Link to="/signup" className="signUpLink">Sign up</Link></div>
				</form>
			</div>
    	</div>
    );
  }
}

export default Login;