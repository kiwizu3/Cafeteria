import React from "react";
import loginImg from "../../images/BBBlogo.jpg";
import "./style.scss";
import { Menu } from "../../pages/Menu.js";

export class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="base-container">
				<div className="content">
					<div className="image">
						<img src={loginImg} alt="Login Image" />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" name="username" placeholder="username" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" placeholder="password" />
						</div>
					</div>
				</div>
				<div className="footer">
					<a href="Menu">
						<button type="button" className="lgn-btn">
							Login
						</button>
					</a>
				</div>
			</div>
		);
	}
}
