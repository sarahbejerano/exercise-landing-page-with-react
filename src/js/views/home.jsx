import React from "react";
import "../../styles/home.scss";
import { Row, Col, Container, Carousel, Navbar } from "react-bootstrap";
import CardPage from "../component/card";
import "../../styles/carousel.scss";

export const Home = () => {
	return (
		<Container>
			<Carousel fade className="previewImages" variant="light" fluid="lg">
				<Carousel.Item className="carouselItem" interval={1000}>
					<img
						className="d-block w-100 carousel-img"
						src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/04/ia_0530_a-historic-timeline-of-miamis-art-deco-district_spot1.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100 carousel-img"
						src="https://theculturetrip.com/wp-content/uploads/2019/04/ia_0530_a-historic-timeline-of-miamis-art-deco-district_spot2.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100 carousel-img"
						src="https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0530_a-historic-timeline-of-miamis-art-deco-district_header2.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
			<>
				<Navbar>
					<div className="highlights">
						<Navbar.Brand variant="light">
							<h3>MIAMI Art Deco Highlights</h3>
						</Navbar.Brand>
					</div>
				</Navbar>
			</>
			<Row className="p-1">
				<Col xs={12} md={4}>
					<CardPage
						imageUrl="https://media.timeout.com/images/105467121/1372/1029/image.jpg"
						name="Cardozo South Beach"
						architect="Henry Hohauser"
						year="1939"
						location="1300 Ocean Dr, South Beach"
						text="The Cardozo Hotel was named after, Benjamin Cardozo, one of the first Jewish jurors appointed to the US Supreme Court.  Cardozo is part of the Art Deco District, recognized by the National Register of Historic Places."
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl=""
						name=""
						architect=""
						year=""
						location=""
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl=""
						name=""
						architect=""
						year=""
						location=""
					/>
				</Col>
			</Row>
			<Row className="p-1">
				<Col xs={12} md={4}>
					<CardPage
						imageUrl=""
						name=""
						architect=""
						year=""
						location=""
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl=""
						name=""
						architect=""
						year=""
						location=""
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl=""
						name=""
						architect=""
						year=""
						location=""
					/>
				</Col>
			</Row>
		</Container>
	);
};
