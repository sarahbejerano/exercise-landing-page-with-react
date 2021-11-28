import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/jumbotron.scss";

//create your first component
const Jumbotron = () => {
	return (
		<Container>
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>

				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</Container>
	);
};

export default Jumbotron;
