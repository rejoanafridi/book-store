import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Cards from "../components/cards/Cards";

const HomePage = () => {
	return (
		<>
			<main className="py-12 px-6 2xl:px-6 container">
				<div className="order-2 xl:-order-1">
					<Header />

					<Cards />
				</div>
			</main>
		</>
	);
};

export default HomePage;
