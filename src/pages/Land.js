import React from "react";

import BBBLogo from "../images/BBBlogo.jpg";

import Hero from "../components/Hero";
import Navbar from "../components/PreLoginNav";

export default function Land() {
	return (
		<>
			<Navbar />
			<body>
				<Hero>
					<div>
						<img className="bbb-logo" src={BBBLogo} alt="Bites for Bytes " />
					</div>
				</Hero>
				<a href="Login">
					<button>Login</button>
				</a>
			</body>
		</>
	);
}
