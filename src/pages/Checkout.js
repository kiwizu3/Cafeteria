import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Checkout() {
	return (
		<>
			<Navbar />
			<Hero>
				<a>
					<button>Checkout Order</button>
				</a>
			</Hero>
		</>
	);
}
