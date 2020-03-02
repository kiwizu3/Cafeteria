import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Error() {
	return (
		<>
			<Navbar />
			<Hero>
				<div>Hello from Error page.</div>
			</Hero>
		</>
	);
}
