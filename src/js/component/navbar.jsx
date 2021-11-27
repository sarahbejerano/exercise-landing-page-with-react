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
		<BootstrapNavbar
			className="navbarNative"
			xs={12}
			md={4}
			expand="lg"
			variant="dark"
			fluid>
			<Container>
				<Row>
					<Col className="navBrand">
						<BootstrapNavbar.Brand href="#home">
							Start Bootstrap
						</BootstrapNavbar.Brand>
					</Col>
					<Col className="d-flex justify-content-end">
						<BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
						<BootstrapNavbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#about">About</Nav.Link>
								<Nav.Link href="#services">Services</Nav.Link>
								<Nav.Link href="#contact">Contact</Nav.Link>
							</Nav>
						</BootstrapNavbar.Collapse>
					</Col>
				</Row>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;
