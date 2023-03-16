import React, { useRef } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../Contexts/AuthContext";

const Nav = () => {
	const navRef = useRef();
	const { currentUser, logout } = useAuth();

	function toggleMenu() {
		navRef.current.classList.toggle("active");
	}

	async function handleLogout() {
		try {
			await logout();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<nav>
			<div className="nav-container">
				<a href="/" className="logo">
					Passengers
				</a>
				<ul className="nav-links" ref={navRef}>
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
						{currentUser ? (
							currentUser?.email
						) : (
							<button className="login-btn">
								<Link to="/login">Log In</Link>
							</button>
						)}
					</li>
					{currentUser && (
						<li>
							<button className="login-btn" onClick={handleLogout}>
								Log Out
							</button>
						</li>
					)}
				</ul>
				<div className="hamburger" onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
