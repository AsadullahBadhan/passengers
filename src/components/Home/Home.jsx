import React from "react";
import "./Home.css";
import transportData from "../../transportData";
import Transport from "../Transport/Transport";

const Home = () => {
	return (
		<div className="transit-container">
			{transportData.map(transport => (
				<Transport transport={transport} key={transport.type} />
			))}
		</div>
	);
};

export default Home;
