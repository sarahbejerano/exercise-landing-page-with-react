import React from "react";
import "../../styles/jumbotron.scss";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron" fluid>
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>

			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
};

export default Jumbotron;
