import React from "react";
import "./nav.css";

const Nav = () => {
	return (
		<nav>
			<a
				href="/"
				className="logo"
			>
				Passengers
			</a>
			<ul>
				<li>Home</li>
				<li>Destination</li>
				<li>Blog</li>
				<li>Contact</li>
				<li>
					<button className="login-btn">Login</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
