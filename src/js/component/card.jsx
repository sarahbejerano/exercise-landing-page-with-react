import React from "react";
import "../../styles/cards.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CardPage = ({ imageUrl, name, architect, text, year, location }) => {
	return (
		<Card className="cardFull">
			<Card.Img
				className="cardImage"
				variant="top"
				src={imageUrl}
				style={{ position: "center", padding: "5px" }}
			/>

			<Card.Body className="cardBody">
				<Card.Title>
					<b>{name}</b>
				</Card.Title>
				<Card.Text>
					<b>{architect}</b>
				</Card.Text>
				<Card.Text>{year}</Card.Text>
				<Card.Text>{location}</Card.Text>
				<Card.Text>{text}</Card.Text>
				<div className="footerCard">
					<Button type="button" className="moreDetails" size="sm">
						More Details
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CardPage;

CardPage.propTypes = {
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	architect: PropTypes.string,
	year: PropTypes.string,
	location: PropTypes.string,
	text: PropTypes.string
};
