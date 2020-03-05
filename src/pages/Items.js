import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Items() {
	return (
		<>
			<Navbar />
			<Hero hero="itemsHero">
				<Banner title="Items">
					<Link to="/menu" className="btn-primary">
						Back to Menu
					</Link>
				</Banner>
			</Hero>
		</>
	);
}
