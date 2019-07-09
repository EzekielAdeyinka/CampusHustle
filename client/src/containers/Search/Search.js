import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import SearchBanner from "../../components/SearchBanner/SearchBanner";
import VendorCard from "../../components/VendorCard/VendorCard";

class Search extends React.Component {
	state = {
		vendors: []
	};
	render() {
		let searchResults = <p>No vendor matching the search found</p>;
		if (this.state.vendors.length > 0) {
			searchResults = this.state.vendors.map(vendor => (
				<VendorCard vendor={vendor} />
			));
		}
		return (
			<React.Fragment>
				<Header />
				<main>
					<SearchBanner />
					<section className="Page_section">
						<h3>Your Search Results</h3>
						<div className="Container">
							<div className="Card_list Search_list">{searchResults}</div>
							<div className="Center_btn">
								<Link href="/all-vendors" className="Btn">
									View All Vendors
								</Link>
							</div>
						</div>
					</section>
					<Banner />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Search;
