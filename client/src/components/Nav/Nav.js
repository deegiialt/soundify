import React from "react";
import "./Nav.css";
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from "react-router-dom";

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
		  dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
		  dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return(
		<div>
			<div className="search-container">
				<div className="search-box">
					<input type="text" />
					<span></span>
				</div>
			</div>
			<Link to="/upload" className="glyphicon glyphicon-plus btn upload"></Link>
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="profile-icon btn glyphicon glyphicon-user" />
              <DropdownMenu>
              	<div className="profileHeader">
	                <img className="profileImage" alt="profileImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYWrNxlCkqHlLvtG1qSB2BxktAOIeoU3HY1Mv7Ku5HAZgWwe5Zg"/>
	                <span className="profileName">Name</span>
                </div>
                <div className="profileIcons text-center">
	                <div className="glyphicon glyphicon-heart icons btn" />
	                <div className="glyphicon glyphicon-retweet icons btn" />
	            </div>
                <div className="logout text-center btn">Log out</div>   
              </DropdownMenu>
          	</Dropdown>
			
		</div>
		)
	}
};
export default Nav;