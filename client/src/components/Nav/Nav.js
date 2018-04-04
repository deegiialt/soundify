import React from "react";
import "./Nav.css";
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from "react-router-dom";
import animate from "animate.css";

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
		<div className="row">
		<div className="col-md-12">
			<div className="search-container">
				<div className="search-box">
					<input type="text" />
					<span></span>
				</div>
			</div>

			<div className="buttonsContainer"><Link to="/upload" className="glyphicon glyphicon-plus btn upload"></Link>
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="profile-icon glyphicon glyphicon-user dropdownToggle" />
              <DropdownMenu className="dropdownMenu">
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
          	</ButtonDropdown>
			
			</div>
			<div className="text-center websiteTitle animate rollIn">SOUNDIFY</div>
		</div>
		</div>
		)
	}
};
export default Nav;