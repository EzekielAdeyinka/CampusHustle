import React from "react";

const howTo = props => (
	<section className="page-section">
		<h3>How It Works</h3>
		<p className="lg-text">
			Get connected with two or more best sellers for your mid-term/long-term
			project-based jobs. Manage your team with our project mgt suite.
		</p>
		<div className="how-to-card-list">
			<article className="how-to-card">
				<div className="how-to-card__img">
					<img src="img/magnifier.svg" alt="Magnifier Icon" />
				</div>
				<div className="how-to-card__no">1</div>
				<div className="how-to-card__text">
					We have vetted Nigerian students/youths on our platform to get your
					job done. Just describe your task here and get connected.
				</div>
			</article>
			<article className="how-to-card">
				<div className="how-to-card__img">
					<img src="img/business-affiliate-network.svg" alt="Network Icon" />
				</div>
				<div className="how-to-card__no">2</div>
				<div className="how-to-card__text">
					Once you get connected with the best fit for your job, discuss your
					job details with them. (You are allowed to negotiate price just
					twice).
				</div>
			</article>
			<article className="how-to-card">
				<div className="how-to-card__img">
					<img src="img/smart-worker.svg" alt="Smart Worker Icon" />
				</div>
				<div className="how-to-card__no">3</div>
				<div className="how-to-card__text">
					Chat with your seller to know the status of your job and get real time
					updates, open dispute page in cases of breach of
					contract/dissatisfaction and get it resolved by almost immediately.
				</div>
			</article>
		</div>
	</section>
);

export default howTo;
