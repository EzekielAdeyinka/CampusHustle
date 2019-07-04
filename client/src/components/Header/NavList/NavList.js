import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavListItem from "./NavListItem/NavListItem";

const NavList = props => {
	const mainNavList = [
		{
			linkText: "Login",
			path: "/login",
			mobile: false
		},
		{
			linkText: "Sign Up",
			path: "/signup",
			mobile: false
		},
		{
			linkText: "Post a Service",
			path: "/vendor-signup",
			mobile: false,
			linkClasses: ["Btn", "Nav_Btn"]
		}
	];
	return (
		<React.Fragment>
			<nav className="Main_nav">
				<ul className="Main_nav__list">
					{mainNavList.map(li => (
						<NavListItem {...li} />
					))}
				</ul>
				<div className="burger burger-slip mobile-menu">
					<div className="burger-lines" />
				</div>
			</nav>
			<nav className="Mobile_nav Hide">
				<Logo />
				<ul className="Mobile_nav__list">
					{mainNavList
						.map(li => {
							li.mobile = true;
							return li;
						})
						.map(li => (
							<NavListItem {...li} />
						))}
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default NavList;
