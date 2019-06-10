import React from "react";

const homeBanner = props => {
	return (
		<section className="main-banner">
			<h1 className="green">Find a Hustler</h1>
			<h3 className="white">
				Nigeria’s No. 1 Marketplace for student entrepreneurs & freelancers
			</h3>
			<form action="#" method="post">
				<div className="form-group">
					<input
						type="text"
						name="search"
						className="form-field"
						placeholder="Search Here..."
						required
					/>
				</div>
				<button className="search-btn">
					<img src="img/search.svg" alt="Search Icon" />
				</button>
			</form>
		</section>
	);
};

export default homeBanner;
