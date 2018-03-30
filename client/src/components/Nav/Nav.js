import React from "react";
import "./Nav.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="profile-icon btn glyphicon glyphicon-user" />
              <DropdownMenu>
                <img className="profileImage" src="example.com"/>
                <div className="profileName">Name</div>
                <div className="glyphicon glyphicon-heart icons btn" />
                <div className="glyphicon glyphicon-plus icons btn" />
                <div className="logout">Log out</div>   
              </DropdownMenu>
          	</Dropdown>
			<Link to="/upload" className="glyphicon glyphicon-plus btn upload"></Link>
		</div>
		)
	}
};
export default Nav;