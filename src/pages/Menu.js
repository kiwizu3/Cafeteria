import React from "react";
import Navbar from "../components/Navbar";
import { Items } from "./Items.js";
import Hero from "../components/Hero";

export default function Menu() {
	return (
		<>
			<Navbar />
			<Hero>
				<a href="Items">
					<button>Items</button>
				</a>
			</Hero>
		</>
	);
}
