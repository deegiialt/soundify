import React, { Component } from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
    	<div classNameName="container">
    		<h1 className="soundifySignup">SOUNDIFY</h1>
			<form className="signupForm" method="post" action="/main">
				<label>
					<input type="text" id="name" name="userName" required />
					<div className="label-text">Name</div>
				</label>
				<label>
					<input type="text" id="email" name="userName" required />
					<div className="label-text">Email</div>
				</label>
				<label>
					<input type="text" id="userName" name="userName" required />
					<div className="label-text">Username</div>
				</label>
				<label>
			    	<input type="text" id="password" name="password" required />
			    	<div className="label-text">Password</div>
				</label>
				<Link to="/main"><button className="signupSubmit">Submit</button></Link>
				{/*<hr>
				<p>Login with:</p>
				<span>
       			<a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
   				<a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>					
				</span>*/}
			</form>

    	</div>
    );
  }
}

export default Signup;