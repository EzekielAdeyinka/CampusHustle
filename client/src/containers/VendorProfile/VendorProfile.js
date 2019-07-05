import React from "react";
import Footer from "../../components/Footer/Footer";
import Overlay from "../../components/UI/Overlay/Overlay";
import Header from "../../components/Header/Header";
import VendorProfileCard from "../../components/VendorProfileCard/VendorProfileCard";
import ezekiel from "../../assets/img/ezekiel.jpg";
import Banner from "../../components/Banner/Banner";

class VendorProfile extends React.Component {
	state = {
		vendor: {
			firstName: "Ezekiel ",
			lastName: "Adeyinka",
			service: "Software Development",
			campus: "OAU",
			experience: 3,
			phone: "08175410053",
			bio:
				"I build world class Software solutions that scales. I'm available for any job.",
			imgUrl: ezekiel
		}
	};
	render() {
		return (
			<React.Fragment>
				<Overlay />
				<Header />
				<main>
					<section className="Page_section Profile Space_down">
						<VendorProfileCard vendor={this.state.vendor} />
                    </section>
                <Banner />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default VendorProfile;
