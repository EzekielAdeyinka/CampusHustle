import React from 'react';

const categories = (props) => {
    return (
        <section className="page-section">
				<h3>Categories</h3>
				<div className="container">
					<div className="card-list">
						<article className="card">
							<div className="card-img">
								<img src="img/creative-skills.jpg" alt="Creative Skills Category" />
							</div>
							<div className="card-details">
								<p>Creative Skills</p>
							</div>
						</article>
						<article className="card">
							<div className="card-img">
								<img src="img/social-media.jpg" alt="Digital Marketing Category" />
							</div>
							<div className="card-details">
								<p>Digital Marketing</p>
							</div>
						</article>
						<article className="card">
							<div className="card-img">
								<img src="img/graphic-design.jpg" alt="Graphic Design Category" />
							</div>
							<div className="card-details">
								<p>Graphic Design</p>
							</div>
						</article>
						<article className="card">
							<div className="card-img">
								<img src="img/artwork.jpg" alt="Artwork and Drawings Category" />
							</div>
							<div className="card-details">
								<p>Artwork/Drawings</p>
							</div>
						</article>
						<article className="card">
							<div className="card-img">
								<img src="img/digital-skills.jpg" alt="Digital Skills Category" />
							</div>
							<div className="card-details">
								<p>Digital Skills</p>
							</div>
						</article>
						<article className="card">
							<div className="card-img">
								<img src="img/fashion.jpg" alt="Fashion Design Category" />
							</div>
							<div className="card-details">
								<p>Fashion Design</p>
							</div>
						</article>
					</div>
					<div className="aside-svg">
						<img src="img/profile.svg" alt="Profile Illustration" />
					</div>
				</div>
			</section>
    );
}

export default categories;