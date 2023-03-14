import React from "react";
import "./Login.css";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Login = () => {
	function handleLogin(e) {
		e.preventDefault();
		console.log("form submitted");
	}

	return (
		<div className="login-container">
			<div className="login-form">
				<h2>Login</h2>

				<form onSubmit={handleLogin}>
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

					<button type="submit" className="login">
						Login
					</button>
					<Link to="/reset" className="reset">
						forgot password?
					</Link>
				</form>

				<p className="signup-text">
					Don't have an account? <Link to="/signup">Create an account.</Link>
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

export default Login;
