import React from "react";
import search from "../../assets/img/search.svg";
import "./HomeBanner.css";

class HomeBanner extends React.Component {
	render() {
		return (
			<section className="Main_banner">
				<h1 className="green">Find a Campus Trader</h1>
				<h3 className="white">
					Nigeria’s No. 1 Marketplace for student entrepreneurs & freelancers
				</h3>
				<form action="#" method="post" id="search-form">
					<div className="Form_group">
						<input
							type="text"
							name="search"
							className="Form_field"
							placeholder="Search for a service.."
							required
						/>
					</div>
					<button className="Search_btn" type="submit">
						<img src={search} alt="Search Icon" />
					</button>
				</form>
			</section>
		);
	}
}

export default HomeBanner;
