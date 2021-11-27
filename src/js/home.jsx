import React from "react";
import Navbar from "./component/navbar";
import Jumbotron from "./component/jumbotron";
import Card from "./component/card";
import Footer from "./component/footer";
import "../styles/home.scss";

//create your first component
const Home = () => {
	return (
		<div className="homeContainer">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
