import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";
import svg from "../../../assets/img/not-found.svg";

const NotFound = () => {
	return (
		<div className={classes.Fullscreen}>
			<div className={classes.Svg_container}>
				<img src={svg} alt="Page Not Found Illustraation" />
			</div>
			<p className={classes.Title}>Page Not Found</p>
			<Link to="/" className="Btn">
				Back to Home
			</Link>
		</div>
	);
};

export default NotFound;
