import React from "react";
import "./App.css";

import Land from "./pages/Land";
import PreMenu from "./pages/PreMenu";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Items from "./pages/Items";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";

import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Land} />
				<Route exact path="/premenu/" component={PreMenu} />
				<Route exact path="/login/" component={Login} />
				<Route exact path="/menu/" component={Menu} />
				<Route exact path="/menu/:items" component={Items} />
				<Route exact path="/menu/:items/:checkout" component={Checkout} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
