import React from "react";
import { Card as BoostrapCard, Button, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

//create your first component
const Card = ({ title, image, description }) => {
	return (
		<BoostrapCard className="card text-center">
			<BoostrapCard.Img variant="top" src={image} />
			<BoostrapCard.Body>
				<BoostrapCard.Title>{title}</BoostrapCard.Title>
				<BoostrapCard.Text>{description}</BoostrapCard.Text>
				<Button variant="primary">Find Out More!</Button>
			</BoostrapCard.Body>
		</BoostrapCard>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string
};
