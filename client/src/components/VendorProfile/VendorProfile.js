import React from "react";

const VendorProfile = props => {
	return (
		<React.Fragment>
			<div className="Profile_img">
				<img src={props.vendor.imgUrl} alt="Vendor Profile Pic" />
			</div>
			<div className="Profile_details">
				<p>
					Name: {props.vendor.firstName} {props.vendor.lastName}
				</p>
				<p>Service: {props.vendor.service}</p>
				<p>Campus: {props.vendor.campus}</p>
				<p>Years of Experience: {props.vendor.experience}</p>
				<p>Phone: {props.vendor.phoneNumber}</p>
				<p>
					Bio: I build world class Software solutions that scales. I'm available
					for any job.
				</p>
				<button className="Inverse">Book Now</button>
			</div>
		</React.Fragment>
	);
};

export default VendorProfile;
