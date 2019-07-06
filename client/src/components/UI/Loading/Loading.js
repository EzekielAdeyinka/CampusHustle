import React from "react";
import classes from "./Loading.module.css";

const Loading = () => (
	<div className={classes.Fullscreen}>
		<div className={classes.Loader}>Loading...</div>
	</div>
);

export default Loading;
