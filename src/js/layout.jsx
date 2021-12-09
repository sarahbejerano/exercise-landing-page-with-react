import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPage from "./component/navbar";
import Footer from "./component/footer";
import ScrollToTop from "./component/scrollToTop";
import Jumbotron from "./component/jumbotron";
import Cards from "./component/card";
import { Home } from "./views/home";
import { Architects } from "./views/architects";
import { Buildings } from "./views/buildings";
import { Timeline } from "./views/timeline";
import { AboutCreator } from "./views/aboutcreator";

const Layout = () => {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<NavbarPage />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/architects" element={<Architects />} />
					<Route path="/buildings" element={<Buildings />} />
					<Route path="/timeline" element={<Timeline />} />
					<Route path="/aboutcreator" element={<AboutCreator />} />
				</Routes>
				<Jumbotron />
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default Layout;
