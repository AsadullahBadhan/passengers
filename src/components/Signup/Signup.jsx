import React from "react";
import "./Signup.css";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Signup = () => {
	function handleLogin(e) {
		e.preventDefault();
		console.log("form submitted");
	}

	return (
		<div className="signup-container">
			<div className="login-form">
				<h2>Create New Account</h2>

				<form onSubmit={handleLogin}>
					<div className="input-container">
						<input type="text" name="user-name" required />
						<label htmlFor="user-name">
							<span className="label-name">Name</span>
						</label>
					</div>

					<div className="input-container">
						<input type="email" name="email" required />
						<label htmlFor="email">
							<span className="label-name">Email</span>
						</label>
					</div>

					<div className="input-container">
						<input type="password" name="password" required />
						<label htmlFor="password">
							<span className="label-name">Password</span>
						</label>
					</div>

					<div className="input-container">
						<input type="password" name="password" required />
						<label htmlFor="password">
							<span className="label-name">Confirm Password</span>
						</label>
					</div>

					<button type="submit" className="login">
						Sign Up
					</button>
				</form>

				<p className="signup-text">
					Already have an account? <Link to="/login">Login.</Link>
				</p>
			</div>
			<div className="divider">
				<hr />
				<p>Or</p>
				<hr />
			</div>
			<div className="oauth-container">
				<button>
					<IconContext.Provider value={{ color: "#3076ff", size: "2rem" }}>
						<span className="auth-icon">
							<BsFacebook />
						</span>
					</IconContext.Provider>
					Continue with Facebook
				</button>
				<button>
					<IconContext.Provider value={{ size: "2rem" }}>
						<span className="auth-icon">
							<FcGoogle />
						</span>
					</IconContext.Provider>
					Continue with Google
				</button>
			</div>
		</div>
	);
};

export default Signup;
