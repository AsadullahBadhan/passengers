import React, { useRef } from "react";

const LocationForm = ({ setLocation }) => {
	const pickFromRef = useRef();
	const pickToRef = useRef();
	const travelDateRef = useRef();
	const travelTimeRef = useRef();

	function handleDestination(e) {
		e.preventDefault();
		setLocation({
			pickFrom: pickFromRef.current.value,
			pickTo: pickToRef.current.value,
			date: travelDateRef.current.value,
			time: travelTimeRef.current.value,
			infoCollected: true,
		});
	}
	return (
		<form onSubmit={handleDestination}>
			<label htmlFor="pick-from">Pick From</label>
			<input type="text" name="pick-from" ref={pickFromRef} required />

			<label htmlFor="pick-to">Pick To</label>
			<input type="text" name="pick-to" ref={pickToRef} required />

			<label htmlFor="pick-date">Pick Date</label>
			<input type="date" name="pick-date" id="" ref={travelDateRef} required />

			<label htmlFor="pick-time">Pick Time</label>
			<input type="time" name="pick-time" id="" ref={travelTimeRef} required />

			<button type="submit" className="main-btn">
				Search
			</button>
		</form>
	);
};

export default LocationForm;
