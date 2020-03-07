import React from "react";
import Navbar from "../components/PreLoginNav";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export default function Menu() {
	return (
		<>
			<Navbar />
			<Hero>
				<Banner title="Menu" subtitle="Browse Wide Variety of Options">
					<Link to="/premenu" className="btn-primary">
						Our Items
					</Link>
				</Banner>
			</Hero>
		</>
	);
}
