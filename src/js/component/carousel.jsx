import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "../../styles/carousel.scss";

const CarouselPage = () => {
	return (
		<Container>
            <Carousel fade className="previewImages" variant="light" fluid="lg">
                <Carousel.Item className="carouselItem" interval={500}>
					<img
                        className="d-block w-100 carousel-img"
						src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/04/ia_0530_a-historic-timeline-of-miamis-art-deco-district_spot1.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
                        className="d-block w-100 carousel-img"
						src="https://theculturetrip.com/wp-content/uploads/2019/04/ia_0530_a-historic-timeline-of-miamis-art-deco-district_spot2.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
                        className="d-block w-100 carousel-img"
						src="https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0530_a-historic-timeline-of-miamis-art-deco-district_header2.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default CarouselPage;
