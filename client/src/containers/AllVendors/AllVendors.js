import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import VendorCard from "../../components/VendorCard/VendorCard";

class AllVendors extends React.Component {
	state = {
		vendors: []
	};
	render() {
		let results = <p>No vendors found</p>;
		if (this.state.vendors.length > 0) {
			results = this.state.vendors.map(vendor => (
				<VendorCard vendor={vendor} />
			));
		}
		return (
			<React.Fragment>
				<Header />
				<main>
					<section className="Search_banner">
						<h3>All Vendors</h3>
					</section>
					<section className="Page_section">
						<div className="Container">
							<div className="Card_list Vendors_list">{results}</div>
						</div>
					</section>
					<Banner />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default AllVendors;
