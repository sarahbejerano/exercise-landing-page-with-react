import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/jumbotron.scss";

//create your first component
const Jumbotron = () => {
	return (
		<Container fluid>
			<div className="jumbotron">
				<div className="jumboText">
					<h5 className="visit">visit Miami</h5>
					<p className="lead">text information</p>
					<p className="lead">
						<a className="btn" href="#" role="button">
							Call to action!
						</a>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Jumbotron;
