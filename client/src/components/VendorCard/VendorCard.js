import React from "react";
import { Link } from "react-router-dom";

const VendorCard = props => {
	return (
		<article className="Card Search_card">
			<div className="Card_img">
				<img src={props.vendor.imgUrl} alt="Vendor" />
			</div>
			<div className="Card_details">
				<p>
					{props.vendor.firstName} {props.vendor.lastName}
				</p>
				<p>{props.vendor.campus}</p>
				<Link to={`/vendor-profile/${props.vendor.vendorID}`} className="Btn">
					View Profile
				</Link>
			</div>
		</article>
	);
};

export default VendorCard;
