import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppNavbar extends React.Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<Navbar light expand="md">
				<NavbarBrand className="brand text-primary" tag={Link} to="/">
					My Reads
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink className="navLink" tag={Link} to="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="navLink" tag={Link} to="/search">
								Search Books
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="navLink" tag={Link} to="/about">
								About
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default AppNavbar;
