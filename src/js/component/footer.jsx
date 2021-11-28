import React from "react";
import "../../styles/footer.scss";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container className="justify-content-center d-flex">
				<Navbar.Brand href="#home">
					Copyright © Sarah Bejerano 2021
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Footer;
