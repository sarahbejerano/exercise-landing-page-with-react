import React from "react";
import {
	Navbar as BootstrapNavbar,
	Container,
	Nav,
	Col,
	Row
} from "react-bootstrap";
import "../../styles/navbar.scss";

//create your first component
const Navbar = () => {
	return (

		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

		// <BootstrapNavbar
		// 	className="navbarNative"
		// 	xs={12}
		// 	md={4}
		// 	expand="lg"
		// 	variant="dark"
		// 	fluid>
		// 	<Container>
		// 		<Row className="container-fluid justify-content-space-between d-flex">
		// 			<Col className="navBrand">
		// 				<BootstrapNavbar.Brand href="#home">
		// 					Start Bootstrap
		// 				</BootstrapNavbar.Brand>
		// 			</Col>
		// 			<Col>
		// 				{/* <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" /> */}
		// 				<BootstrapNavbar.Collapse id="basic-navbar-nav">
		// 					<Nav className="me-auto">
		// 						<Nav.Link href="#home">Home</Nav.Link>
		// 						<Nav.Link href="#about">About</Nav.Link>
		// 						<Nav.Link href="#services">Services</Nav.Link>
		// 						<Nav.Link href="#contact">Contact</Nav.Link>
		// 					</Nav>
		// 				</BootstrapNavbar.Collapse>
		// 			</Col>
		// 		</Row>
		// 	</Container>
		// </BootstrapNavbar>
	);
};

export default Navbar;
