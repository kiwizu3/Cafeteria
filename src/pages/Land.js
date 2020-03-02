import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/PreLoginNav";

export default function Land() {
	return (
		<>
			<Navbar />
			<body>
				<Hero>
					<div>
						<a href="Login">
							<button>Login</button>
						</a>
					</div>
				</Hero>
			</body>
		</>
	);
}
