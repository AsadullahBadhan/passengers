import React from "react";
import bike from "../../assets/bike.png";
import car from "../../assets/car.png";
import bus from "../../assets/bus.png";
import train from "../../assets/train.png";

const Home = () => {
	return (
		<main>
			<div className="card">
				<img
					src={bike}
					alt=""
				/>
			</div>
			<div className="card">
				<img
					src={bus}
					alt=""
				/>
			</div>
			<div className="card">
				<img
					src={car}
					alt=""
				/>
			</div>
			<div className="card">
				<img
					src={train}
					alt=""
				/>
			</div>
		</main>
	);
};

export default Home;
