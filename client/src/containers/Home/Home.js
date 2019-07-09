import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Division from "../../components/UI/Division/Division";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Categories from "../../components/Categories/Categories";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<main>
					<HomeBanner />
					<Division />
					<HowItWorks />
					<Division />
					<Categories />
					<Banner />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
