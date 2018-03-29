import React from "react";
import "./Nav.css";

const Nav = props => (
	<div>
		<div>
			<div className="search-container">
				<div className="search-box">
					<input type="text" />
					<span></span>
				</div>
			</div>
			<div className="dropdown">
				<div className="profile-icon btn glyphicon glyphicon-user dropdown-toggle type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'">
					<div className='dropdown-menu'>
						<span><img src="{props.profileImage}"/></span>
						<span>Name</span>			
					</div>
				</div>
			</div>					
			<div className="profile-dropdown">

			</div>
		</div>
	</div>
);
export default Nav;