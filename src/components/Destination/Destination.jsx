import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import locationMap from "../../assets/Map.png";
import LocationForm from "../LocationForm/LocationForm";
import TravelInfo from "../TravelInfo/TravelInfo";

import "./Destination.css";

const Destination = () => {
	const { transport } = useParams();
	const [location, setLocation] = useState({
		pickFrom: "",
		pickTo: "",
		date: "",
		time: "",
		infoCollected: false,
	});

	// console.log(travelOption);

	return (
		<div className="destination-container">
			{!location.infoCollected && <LocationForm setLocation={setLocation} />}

			{location.infoCollected && <TravelInfo location={location} transport={transport} />}
			<div className="map-container">
				<img src={locationMap} alt="" />
			</div>
		</div>
	);
};

export default Destination;
