import React from "react";
import Navbar from "./component/navbar";
import Jumbotron from "./component/jumbotron";
import Cards from "./component/cards";
import Footer from "./component/footer";
import "../styles/home.scss";

//create your first component
const Home = () => {
	return (
		<div className="homeContainer">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
