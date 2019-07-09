import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavListItem from "./NavListItem/NavListItem";
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu";

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
	const mobileNavClasses = ["Mobile_nav"];
	mobileNavClasses[1] = props.mobileShow ? "" : "Hide";
	return (
		<React.Fragment>
			<nav className="Main_nav">
				<ul className="Main_nav__list">
					{mainNavList.map(li => (
						<NavListItem {...li} key={li.path} />
					))}
				</ul>
				<BurgerMenu show={props.mobileShow} toggle={props.toggleMobileMenu} />
			</nav>
			<nav className={mobileNavClasses.join(' ')}>
				<Logo />
				<ul className="Mobile_nav__list">
					{mainNavList
						.map(li => {
							li.mobile = true;
							return li;
						})
						.map(li => (
							<NavListItem {...li} key={li.path} />
						))}
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default NavList;
