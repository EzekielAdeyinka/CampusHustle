import React from "react";

const category = props => {
    const alt = props.category.name + " Category";
	return (
		<article className="card">
			<div className="card-img">
				<img src="img/creative-skills.jpg" alt={alt} />
			</div>
			<div className="card-details">
				<p>{props.category.name}</p>
			</div>
		</article>
	);
};

export default category;
