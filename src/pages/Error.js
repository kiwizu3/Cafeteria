import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<>
			<Navbar />
			<Hero>
				<Banner title="Error: 404" subtitle="Page Not Found">
					<Link to="/menu" className="btn-primary">
						Go Back Home
					</Link>
				</Banner>
			</Hero>
		</>
	);
}
