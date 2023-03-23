import React from "react";
import transportData from "../../transportData";
import TransportFair from "../TransportFair/TransportFair";

const TravelInfo = ({ location, transport }) => {
	const date = new Date(location.date + " " + location.time);
	const travelDate = date.toLocaleDateString("en-GB");
	const travelTime = date.toLocaleTimeString("en-US");

	const currentTransport = transportData.find(trans => trans.type === transport);
	const travelOption = currentTransport.fair;

	return (
		<>
			<div className="travel-info">
				<div className="location-info">
					<p>{location.pickFrom}</p>
					<p>{location.pickTo}</p>
					<span className="distance-bar"></span>
				</div>
				<p>Travel Date: {travelDate}</p>
				<p>Travel Time: {travelTime}</p>
				<div className="travel-option">
					{travelOption.map(fair => (
						<TransportFair fair={fair} transport={currentTransport} />
					))}
				</div>
			</div>
		</>
	);
};

export default TravelInfo;
