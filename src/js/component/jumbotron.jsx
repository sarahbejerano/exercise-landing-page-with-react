import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/jumbotron.scss";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="center jumbovidtext">
				<h1 className="txtjumbo">Come to visit Miami</h1>
				<p className="txtjumbo"></p>
				<p>
					<a
						className="btn btn-sm"
						id="botjumbo"
						href="#"
						role="button">
						More information
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
