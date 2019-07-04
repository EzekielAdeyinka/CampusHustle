import React from "react";
import magnifier from "../../assets/img/magnifier.svg";
import businessAffiliate from "../../assets/img/business-affiliate-network.svg";
import smartWorker from "../../assets/img/smart-worker.svg";

const HowItWorks = () => {
	return (
		<section className="Page_section">
			<h3>How It Works</h3>
			<p class="Lg_text">
				Get connected with two or more best sellers for your mid-term/long-term
				project-based jobs. Manage your team with our project mgt suite.
			</p>
			<div className="How_to_card_list">
				<article className="How_to_card">
					<div className="How_to_card__img">
						<img src={magnifier} alt="Magnifier Icon" />
					</div>
					<div className="How_to_card__no">1</div>
					<div className="How_to_card__text">
						We have vetted Nigerian students/youths on our platform to get your
						job done. Just describe your task here and get connected.
					</div>
				</article>
				<article className="How_to_card">
					<div className="How_to_card__img">
						<img src={businessAffiliate} alt="Network Icon" />
					</div>
					<div className="How_to_card__no">2</div>
					<div className="How_to_card__text">
						Once you get connected with the best fit for your job, discuss your
						job details with them. (You are allowed to negotiate price just
						twice).
					</div>
				</article>
				<article className="How_to_card">
					<div className="How_to_card__img">
						<img src={smartWorker} alt="Smart Worker Icon" />
					</div>
					<div className="How_to_card__no">3</div>
					<div className="How_to_card__text">
						Chat with your seller to know the status of your job and get real
						time updates, open dispute page in cases of breach of
						contract/dissatisfaction and get it resolved by almost immediately.
					</div>
				</article>
			</div>
		</section>
	);
};

export default HowItWorks;
