import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import JoinBanner from "../../components/JoinBanner/JoinBanner";
import Categories from "../../components/Categories/Categories";
import Line from "../../components/UI/Line/Line";
import HowTo from "../../components/HowTo/HowTo";
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Header from '../../components/Header/Header';

class Search extends Component {
	render() {
		return (
			<React.Fragment>
                <Header />
				<main>
                    <HomeBanner />
					<Line />
					<HowTo />
					<Line />
					<Categories />
					<JoinBanner />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Search;
