import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./card";
import "../../styles/cards.scss";

const Cards = () => {
	const cardsData = [
		{
			title: "one",
			image: "http://via.placeholder.com/640x360",
			description: "Lorem Ipsun"
		},
		{
			title: "two",
			image: "http://via.placeholder.com/640x360",
			description: "Lorem Ipsun"
		},
		{
			title: "three",
			image: "http://via.placeholder.com/640x360",
			description: "Lorem Ipsun"
		},
		{
			title: "four",
			image: "http://via.placeholder.com/640x360",
			description: "Lorem Ipsun"
		}
	];
	return (
		<Container className="mb-5">
			<Row className="bs-gutter-x=2">
				{cardsData.map((cardData, i) => {
					return (
						<Col xs={6} md={4} key={i} className="gy-5 gx-5">
							<Card
								title={cardData.title}
								image={cardData.image}
								description={cardData.description}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Cards;
