import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/logo.png";

const Logo = () => {
	return (
		<div classNmae="Logo">
			<Link to="/">
				<img src={img} alt="Logo" />
			</Link>
		</div>
	);
};

export default Logo;
