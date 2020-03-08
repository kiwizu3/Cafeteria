import React from "react";

import BBBLogo from "../images/BBBlogo.jpg";

import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Navbar from "../components/PreLoginNav";
import Contact from "../components/Contact";

export default function Land() {
	return (
		<>
			<Navbar />
			<body>
				<Hero hero="landHeroBk">
					<img className="bbb-logo" src={BBBLogo} alt="Bites for Bytes " />
					<h1 className="landingH1">clever words or something...........</h1>
				</Hero>
				<Hero hero="landHeroBlnk">
					<Banner
						title="About Us"
						subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					></Banner>
				</Hero>
				<div className="flex-container">
					<div className="menu">
						<Hero hero="landHeroReg">
							<Banner title="Menu">
								<Link to="/premenu" className="btn-primary">
									Lets Go
								</Link>
							</Banner>
						</Hero>
					</div>
					<div className="contact">
						<Hero className="contact">
							<Banner title="Login">
								<Link to="/login" className="btn-primary">
									Login
								</Link>
							</Banner>
						</Hero>
					</div>
				</div>
				<Hero hero="landHeroBlnk">
					<Banner title="Contact" />
				</Hero>
				{/* <Contact /> */}
			</body>
		</>
	);
}
