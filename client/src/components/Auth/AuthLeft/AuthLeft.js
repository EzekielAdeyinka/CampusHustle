import React from "react";
import classes from "../Auth.module.css";

const AuthLeft = props => {
	return (
		<article className={classes.Left}>
			<h3 className={classes.Login}>{props.authType}</h3>
			<h3 className={classes.Eula}>{props.text}</h3>
		</article>
	);
};

export default AuthLeft;
