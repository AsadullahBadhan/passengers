import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
	return (
		<>
			<Nav></Nav>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
