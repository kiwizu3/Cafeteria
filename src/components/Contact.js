import React, { Component } from "react";
import Title from "./Title";
import { MdLocalPhone, MdEmail, MdRoom } from "react-icons/md";

export default class Contact extends Component {
	state = {
		contacts: [
			{
				icon: <MdLocalPhone />,
				title: "XXX-XXX-XXXX"
			},
			{
				icon: <MdEmail />,
				title: "lorumIp@gmail.com"
			},
			{
				icon: <MdRoom />,
				title: "Lorum avenue, NYK, AB"
			}
		]
	};

	render() {
		return (
			<section className="contacts">
				<Title title="Contact Us" />
				<div className="contact-center">
					{this.state.contacts.map((item, index) => {
						return (
							<article key={index} className="contact">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
