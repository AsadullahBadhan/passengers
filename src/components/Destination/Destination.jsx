import React from "react";
import { useParams } from "react-router-dom";
import locationMap from "../../assets/Map.png";

import "./Destination.css";

const Destination = () => {
	const { transport } = useParams();

	function handleDestination(e) {
		e.preventDefault();
	}
	return (
		<div className="destination-container">
			<form onSubmit={handleDestination}>
				<label htmlFor="pick-from">Pick From</label>
				<input type="text" name="pick-from" />

				<label htmlFor="pick-to">Pick To</label>
				<input type="text" name="pick-to" />

				<label htmlFor="pick-date">Pick Date</label>
				<input type="date" name="pick-date" id="" />

				<label htmlFor="pick-time">Pick Time</label>
				<input type="time" name="pick-time" id="" />

				<button type="submit" className="main-btn">
					Search
				</button>
			</form>
			<div className="map-container">
				<img src={locationMap} alt="" />
			</div>
		</div>
	);
};

export default Destination;
