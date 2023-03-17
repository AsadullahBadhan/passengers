import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "./../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
	const emailRef = useRef();
	const { passwordResetEmail } = useAuth();
	const navigate = useNavigate();

	const [message, setMessage] = useState();

	async function handleResetPassword(e) {
		e.preventDefault();
		try {
			await passwordResetEmail(emailRef.current.value);
			setMessage("Check your inbox and follow the instruction in email");
		} catch (error) {
			console.log(error);
			setMessage("Failed to send password reset email");
		}

		setTimeout(() => {
			navigate("/login");
		}, 5000);
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
				<h2>Reset Password</h2>
				<form onSubmit={handleResetPassword}>
					<div className="input-container">
						<input type="email" name="email" ref={emailRef} required />
						<label htmlFor="email">
							<span className="label-name">Email</span>
						</label>
					</div>
					<button type="submit" className="login">
						Send Password Reset Email
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
