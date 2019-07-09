import React from "react";
import "./Header.css";
import Logo from "../UI/Logo/Logo";
import NavList from "./NavList/NavList";
import Overlay from "../UI/Overlay/Overlay";

class Header extends React.Component {
	state = {
		mobileToggle: false
	};
	toggleMobileMenu = () => {
		this.setState(prevState => {
			return {
				mobileToggle: !prevState.mobileToggle
			};
		});
	};
	render() {
		return (
			<React.Fragment>
				<Overlay
					show={this.state.mobileToggle}
					mobileToggle={this.toggleMobileMenu}
				/>
				<header>
					<Logo />
					<NavList
						mobileShow={this.state.mobileToggle}
						toggleMobileMenu={this.toggleMobileMenu}
					/>
				</header>
			</React.Fragment>
		);
	}
}

export default Header;
