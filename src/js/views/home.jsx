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
						imageUrl="https://media.timeout.com/images/102973269/1372/1029/image.jpg"
						name="The Webster"
						architect="Henry Hohauser"
						year="1939"
						location="1220 Collins Ave at 12th St"
						text="A hotel-turned-luxury-boutique of Parisian-designed fashion. This Art Deco pedigree building with original terrazzo flooring, as well as a geometric façade with neon accents, that solidify its Art Deco designation."
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl="https://media.timeout.com/images/103470013/1372/1029/image.jpg"
						name="The Clevelander"
						architect="Albert Anis "
						year="1938"
						location="1020 Ocean Dr at 10th St"
						text="The austere architect, whose portfolio included 70 projects across Miami Beach, went total glam with the decorative Clevelander, incorporating a fully ornate central bay and “eyebrows” that split in the front but continue along the sides."
					/>
				</Col>
			</Row>
			<Row className="p-1">
				<Col xs={12} md={4}>
					<CardPage
						imageUrl="https://foto.hrsstatic.com/fotos/0/3/1090/700/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F2%2F5%2F9%2F6%2F%2Fteaser_259673.jpg/4h7cRKxPKxIsB%2FWkkD9AvA%3D%3D/678,611/6/Essex_House_Hotel_And_Suites-Miami_Beach-Aussenansicht-259673.jpg"
						name="Essex House Hotel"
						architect="Henry Hohauser"
						year="1938"
						location="1001 Collins Ave at 10th St"
						text="Features porthole windows and a smokestack-like neon tower that call to mind a land-locked ocean liner. With its curved façade pointed streetward, the Essex appears to be docked on the junction of Collins and 10th Street."
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/64/35/20/hotel-exterior.jpg?w=900&h=-1&s=1"
						name="The Breakwater"
						architect="Anton Skislewicz"
						year="1939"
						location="940 Ocean Dr, Miami"
						text="Is one of the most well-known boutique properties in the area. You’d recognize that grand, nautical-inspired spire anywhere. If it seems like the ocean-facing hotel is about to sail, well, that’s the point."
					/>
				</Col>
				<Col xs={12} md={4}>
					<CardPage
						imageUrl="https://media.timeout.com/images/101506487/1372/1029/image.jpg"
						name="The Tides"
						architect="L. Murray Dixon"
						year=""
						location="1220 Ocean Dr between 12th and 13th Sts "
						text="L. Murray Dixon was one of the city’s most prolific architects of the Art Deco era, so it’s only fitting that the tallest Art Deco structure of the mid-’30s would be credited to him."
					/>
				</Col>
			</Row>
		</Container>
	);
};
