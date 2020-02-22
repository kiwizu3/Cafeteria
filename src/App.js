import React from "react";
import "./App.css";

import Land from "./pages/Land";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Items from "./pages/Items";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Land} />
				<Route exact path="/login/" component={Login} />
				<Route exact path="/menu/" component={Menu} />
				<Route exact path="/menu/:items" component={Items} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
