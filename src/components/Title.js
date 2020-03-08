import React from "react";
import { FaPhone } from "react-icons/fa";
export default function Title({ title }) {
	return (
		<div className="contact-title">
			<h4>{title}</h4>
			<FaPhone />
			<div />
		</div>
	);
}
