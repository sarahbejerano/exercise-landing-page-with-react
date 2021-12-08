import React from "react";
import NavbarPage from "./component/navbar";
import Jumbotron from "./component/jumbotron";
import CarouselPage from "./component/carousel";
import Cards from "./component/cards";
import Footer from "./component/footer";
import "../styles/home.scss";

//create your first component
const Home = () => {
	return (
		<div className="homeContainer">
			<NavbarPage />
			<CarouselPage />
			<Cards />
			<Jumbotron />
			<Footer />
		</div>
	);
};

export default Home;
