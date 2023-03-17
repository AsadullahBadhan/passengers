import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth, fbProvider, googleProvider } from "../firebase.config";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	function signupWithEmail(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function loginWithEmail(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	function googleSignIn() {
		return signInWithPopup(auth, googleProvider);
	}

	function facebookSignIn() {
		return signInWithPopup(auth, fbProvider);
	}

	function passwordResetEmail(email) {
		return sendPasswordResetEmail(auth, email);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signupWithEmail,
		loginWithEmail,
		logout,
		googleSignIn,
		facebookSignIn,
		passwordResetEmail,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
