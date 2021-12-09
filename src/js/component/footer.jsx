import React from "react";
import "../../styles/footer.scss";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
	return (
		<Navbar className="footerpage">
			<Container className="justify-content-center d-flex">
				<Navbar.Brand>
					<h6>Copyright © Sarah Bejerano 2021</h6>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Footer;
