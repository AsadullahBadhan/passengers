import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<div className="nav-container">
				<a
					href="/"
					className="logo"
				>
					Passengers
				</a>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Destination</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<button className="login-btn">
							<Link to="/login">Log In</Link>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
