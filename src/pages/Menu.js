import React from "react";
import Navbar from "../components/Navbar";
import { Items } from "./Items.js";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export default function Menu() {
	return (
		<>
			<Navbar />
			<Hero>
				<Banner title="Menu" subtitle="Browse Wide Variety of Options">
					<Link to="/menu/:items" className="btn-primary">
						Our Items
					</Link>
				</Banner>
			</Hero>
		</>
	);
}
