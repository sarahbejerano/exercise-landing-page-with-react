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
			<Navbar.Brand href="/">
				<h3>Miami Art Deco District</h3>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/architects">
						<h4>Architects</h4>
					</Nav.Link>
					<Nav.Link href="/buildings">
						<h4>Buildings</h4>
					</Nav.Link>
					<Nav.Link href="/timeline">
						<h4>Timeline</h4>{" "}
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="/aboutcreator">About Creator </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavbarPage;
