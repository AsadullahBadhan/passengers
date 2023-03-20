import React from "react";
import { useNavigate } from "react-router-dom";

const Transport = ({ transport }) => {
	const { type, imageLink } = transport;
	const navigate = useNavigate();

	function handleTransport() {
		navigate(type + "/destination/");
	}
	return (
		<div className="card" onClick={handleTransport}>
			<img src={imageLink} alt="" />
		</div>
	);
};

export default Transport;
