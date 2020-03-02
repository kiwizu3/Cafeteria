import React from "react";
import { LoginPage } from ".././components/login/login";
import Navbar from "../components/PreLoginNav";
import Hero from "../components/Hero";

export default function Login() {
	return (
		<>
			<Navbar />
			<Hero>
				<LoginPage />
			</Hero>
		</>
	);
}
