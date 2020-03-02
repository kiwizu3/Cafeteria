import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Items() {
	return (
		<>
			<Navbar />
			<Hero hero="itemsHero">
				<a href="Checkout">
					<button>Checkout</button>
				</a>
			</Hero>
		</>
	);
}
