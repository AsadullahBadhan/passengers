import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../Contexts/AuthContext";

const Nav = () => {
	const navRef = useRef();
	const { currentUser, logout } = useAuth();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handler = e => {
			if (!navRef.current.contains(e.target)) {
				setIsActive(false);
			}
			// console.log(navRef.current.contains(e.target));
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);

	async function handleLogout() {
		try {
			await logout();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<nav>
			<div className="nav-container" ref={navRef}>
				<a href="/" className="logo">
					Passengers
				</a>
				<ul className={isActive ? "nav-links active" : "nav-links inactive"}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Car/destination/">Destination</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>

					{currentUser ? (
						<li>
							<Link to="/profile">{currentUser?.displayName || currentUser.email}</Link>
						</li>
					) : (
						<button className="main-btn">
							<Link to="/login">Log In</Link>
						</button>
					)}
					{currentUser && (
						<button className="main-btn">
							<Link onClick={handleLogout}>Log Out</Link>
						</button>
					)}
				</ul>
				<div className="hamburger" onClick={() => setIsActive(!isActive)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
