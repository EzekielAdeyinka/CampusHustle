import React from "react";
import Logo from "../UI/Logo/Logo";
import NavList from "./NavList/NavList";

class Header extends React.Component {
	render() {
		return (
			<header>
				<Logo />
				<NavList />
			</header>
		);
	}
}

export default Header;
