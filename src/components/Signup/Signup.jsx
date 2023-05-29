import React, { useRef, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../../Contexts/AuthContext";

const Signup = () => {
	const userNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const { signupWithEmail} = useAuth();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	async function handleSignup(e) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setMessage("Password do not match");
		}

		try {
			setMessage("");
			setLoading(true);
			await signupWithEmail(emailRef.current.value, passwordRef.current.value);
			navigate("/");
		} catch (error) {
			console.log(error);
			setMessage(`Failed to create account ${error}`);
		}

		setLoading(false);
	}

	return (
		<div className="form-container">
			{message && (
				<div className="message-card">
					<p>{message}</p>
					<span className="close-message" onClick={() => setMessage("")}>
						X
					</span>
				</div>
			)}
			<div className="login-form">
				<h2>Create New Account</h2>

				<form onSubmit={handleSignup}>
					<div className="input-container">
						<input type="text" name="user-name" required ref={userNameRef}/>
						<label htmlFor="user-name">
							<span className="label-name">Name</span>
						</label>
					</div>

					<div className="input-container">
						<input type="email" name="email" ref={emailRef} required />
						<label htmlFor="email">
							<span className="label-name">Email</span>
						</label>
					</div>

					<div className="input-container">
						<input type="password" name="password" ref={passwordRef} required />
						<label htmlFor="password">
							<span className="label-name">Password</span>
						</label>
					</div>

					<div className="input-container">
						<input type="password" name="password" ref={confirmPasswordRef} required />
						<label htmlFor="password">
							<span className="label-name">Confirm Password</span>
						</label>
					</div>

					<button type="submit" className="login" disabled={loading}>
						Sign Up
					</button>
				</form>

				<p className="signup-text">
					Already have an account? <Link to="/login">Login.</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
