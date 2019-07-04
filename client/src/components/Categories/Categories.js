import React from "react";
import creativeSkills from "../../assets/img/creative-skills.jpg";
import digitalMarketing from "../../assets/img/social-media.jpg";
import graphicDesign from "../../assets/img/graphic-design.jpg";
import artWork from "../../assets/img/artwork.jpg";
import digitalSkills from "../../assets/img/digital-skills.jpg";
import fashion from "../../assets/img/fashion.jpg";
import profile from "../../assets/img/profile.svg";

const Categories = () => {
	return (
		<section className="Page_section">
			<h3>Categories</h3>
			<div className="Container">
				<div className="Card_list">
					<article className="Card Clickable_card">
						<div className="Card_img">
							<img src={creativeSkills} alt="Creative Skills Category" />
						</div>
						<div className="Card_details">
							<p>Creative Skills</p>
						</div>
					</article>
					<article className="Card Clickable_card">
						<div className="Card_img">
							<img src={digitalMarketing} alt="Digital Marketing Category" />
						</div>
						<div className="Card_details">
							<p>Digital Marketing</p>
						</div>
					</article>
					<article className="Card Clickable_card">
						<div className="Card_img">
							<img src={graphicDesign} alt="Graphic Design Category" />
						</div>
						<div className="Card_details">
							<p>Graphic Design</p>
						</div>
					</article>
					<article className="Card Clickable_card">
						<div className="Card_img">
							<img src={artWork} alt="Artwork and Drawings Category" />
						</div>
						<div className="Card_details">
							<p>Artwork/Drawings</p>
						</div>
					</article>
					<article className="Card Clickable_card">
						<div class="Card_img">
							<img src={digitalSkills} alt="Digital Skills Category" />
						</div>
						<div className="Card_details">
							<p>Software Development</p>
						</div>
					</article>
					<article className="Card Clickable_card">
						<div className="Card_img">
							<img src={fashion} alt="Fashion Design Category" />
						</div>
						<div className="Card_details">
							<p>Fashion Design</p>
						</div>
					</article>
					<div className="Show_more_btn">
						<button>Show More Categories</button>
					</div>
				</div>
				<div className="Aside_svg">
					<img src={profile} alt="Profile Illustration" />
				</div>
			</div>
		</section>
	);
};

export default Categories;
