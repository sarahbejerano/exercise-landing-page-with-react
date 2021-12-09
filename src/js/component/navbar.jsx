import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../styles/navbar.scss";

const NavbarPage = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="light"
			xs={12}
			md={4}
			className="navbarStyle">
			<Navbar.Brand href="#home">Miami Art Deco District</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/architects">Architects</Nav.Link>
					<Nav.Link href="/buildings">Buildings</Nav.Link>
					<Nav.Link href="/timeline">Timeline </Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="/aboutcreator">About Creator </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavbarPage;
