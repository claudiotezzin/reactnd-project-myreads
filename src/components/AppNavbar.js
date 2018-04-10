import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
	Form,
	FormGroup,
	Input
} from 'reactstrap';

import '../styles/App.css';

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
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/components/">
									Components
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">
									GitHub
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<Form className="form-inline my-2 my-lg-0">
							<FormGroup>
								<Input
									className="form-control mr-sm-2"
									type="search"
									name="search"
									id="searchBook"
									placeholder="Search"
								/>
							</FormGroup>
						</Form>
						<Button
							classame="my-2 my-sm-0"
							outline
							color="success"
							type="submit">
							primary
						</Button>{' '}
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default AppNavbar;
