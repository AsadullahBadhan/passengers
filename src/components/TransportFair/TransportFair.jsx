import React from "react";
import { IoPeople } from "react-icons/io5";
import "./TransportFair.css";

const TransportFair = ({ transport, fair }) => {
	const { type, imageLink } = transport;
	return (
		<div className="transport-fair">
			<img src={imageLink} alt="transport" />
			<p>{type}</p>
			<p>
				<span>
					<IoPeople />
				</span>
				{Math.floor(Math.random() * 5) + 1}
			</p>
			<p>{fair}৳</p>
		</div>
	);
};

export default TransportFair;
