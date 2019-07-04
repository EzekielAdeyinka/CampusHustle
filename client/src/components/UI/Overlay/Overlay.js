import React from "react";

const Overlay = props => {
	const classes = ["Overlay", "Hide"];
	if (!props.show) {
		classes.pop();
	}
	return <div className={classes.join(" ")} />;
};

export default Overlay;
