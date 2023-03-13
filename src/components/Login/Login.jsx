import React from "react";
import "./Login.css";

const Login = () => {
	function handleLogin(e) {
		e.preventDefault();
		console.log("form submitted");
	}

	return (
		<div className="login-container">
			<div className="login-form">
				<h1>Login</h1>

				<form onSubmit={handleLogin}>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" />

					<label htmlFor="password">Password</label>
					<input type="password" name="password" />

					<button type="submit" className="login">
						Login
					</button>
					<p>forgot password?</p>
				</form>

				<p>Don't have an account? Create an account.</p>
			</div>
		</div>
	);
};

export default Login;
