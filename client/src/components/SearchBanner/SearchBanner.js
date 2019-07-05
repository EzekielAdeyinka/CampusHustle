import React from "react";
import "./SearchBanner.css";
import search from "../../assets/img/green-search.svg";

class SearchBanner extends React.Component {
	render() {
		return (
			<section className="Search_banner">
				<form action="#" method="get">
					<div className="Form_group">
						<input
							type="text"
							name="search"
							className="Form_field"
							placeholder="Search Here..."
							required
						/>
					</div>
					<button className="Search_btn Inverse" type="submit">
						<img src={search} alt="Search Icon" />
					</button>
				</form>
			</section>
		);
	}
}

export default SearchBanner;
