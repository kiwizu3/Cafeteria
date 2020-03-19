import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import employee from "../images/Employee.png";
import './Checkout.css';

export default function Checkout() {
	return (
		<>
			<Navbar />
			<body>
			<Hero  hero="landHeroBk">
				<div className="titleBar w-100 block">
					<h1 className="center-text">Order Summary</h1>
				</div>
				<div className = "block white center-text">
					<span className="bold">Order #1</span>
					<div >
						<span>1</span><span className="priceSpacing"> First Order #1</span><span>Price</span>
					</div>
					<hr></hr>
					<div >
						<span className="subSpace"> SUBTOTAL</span><span>Price</span>
					</div>
					<div >
						<span className="taxSpace"> TAX</span><span>Price</span>
					</div>
					<div >
						<span className="totalSpace"> TOTAL</span><span>Price</span>
					</div>
					<a>
					<button>Checkout Order</button>
					</a>

					


	




				</div>
			</Hero>
			</body>

		</>
	);
}
