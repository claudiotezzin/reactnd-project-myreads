import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import 'styles/css/appnavbar.css';

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
			<div>
				<Navbar light expand="md">
					<NavbarBrand className="brand text-primary" href="/">
						My Reads
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink className="navLink" href="/">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navLink" href="/search">
									Search Books
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navLink" href="/about">
									About
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default AppNavbar;
