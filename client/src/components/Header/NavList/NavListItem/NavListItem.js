import React from "react";
import { Link } from "react-router-dom";

const NavListItem = props => {
	const itemClass = props.mobile
		? "Mobile_nav__list_item"
		: "Main_nav__list_item";
	return (
		<li className={itemClass}>
			<Link
				to={props.path}
				className={props.linkClasses ? props.linkClasses.join(" ") : null}
			>
				{props.linkText}
			</Link>
		</li>
	);
};

export default NavListItem;
