import React from "react";

import BBBLogo from "../images/BBBlogo.jpg";

import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Navbar from "../components/PreLoginNav";
export default function Land() {
	return (
		<>
			<Navbar />
			<body>
				<Hero hero="landHeroBk">
					<img className="bbb-logo" src={BBBLogo} alt="Bites for Bytes " />
					<h1 className="landingH1">clever words or something...........</h1>
				</Hero>
				<Hero hero="landHeroW">
					<Banner title="About Us" />
				</Hero>
				<div className="flex-container">
					<div className="menu">
						<Hero hero="landHeroReg">
							<Banner title="Menu" />
						</Hero>
					</div>
					<div className="contact">
						<Hero className="contact">
							<Banner title="Contact" />
						</Hero>
					</div>
				</div>
				<Hero hero="landHeroW">
					<Banner title="Login">
						<Link to="/login" className="btn-primary">
							Login
						</Link>
					</Banner>
				</Hero>
			</body>
		</>
	);
}
