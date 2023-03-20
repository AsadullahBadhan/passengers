import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./Contexts/AuthContext";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Destination from "./components/Destination/Destination";
import PrivateRoute from "./Routes/PrivateRoute";

const App = () => {
	return (
		<AuthProvider>
			<Nav></Nav>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/:transport/destination"
						element={
							<PrivateRoute>
								<Destination />
							</PrivateRoute>
						}
					/>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/reset" element={<ResetPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</AuthProvider>
	);
};

export default App;
