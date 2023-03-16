import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	function signupWithEmail(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
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
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
