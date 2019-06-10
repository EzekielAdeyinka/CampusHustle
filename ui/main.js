const API_URL = "https://campushustle50.azurewebsites.net";

const imgUrls = [
	"https://res.cloudinary.com/alphex-code-ltd/image/upload/v1560172014/Cape%20Town/sunday.jpg",
	"https://res.cloudinary.com/alphex-code-ltd/image/upload/v1560172002/Cape%20Town/tinu.jpg",
	"https://res.cloudinary.com/alphex-code-ltd/image/upload/v1560171999/Cape%20Town/solomon.jpg",
	"https://res.cloudinary.com/alphex-code-ltd/image/upload/v1560171993/Cape%20Town/timi.jpg"
];

const makeRequest = (url, method, data = null) => {
	let req = null;
	if (method === "get" || method === "delete") {
		req = fetch(API_URL + url, {
			method
		});
	} else if (method === "post" || method === "put") {
		req = fetch(API_URL + url, {
			method,
			body: data
		});
	} else {
		return null;
	}
	return req.then(response => response.json());
};

const searchList = document.querySelector(".search-list");

const handleSearch = search => {
	return makeRequest(`/api/vendors?campus=&Category=&keyWord=${search}`, "get");
};

const fetchVendor = id => {
	return makeRequest(`/api/vendors/${id}`, "get");
};

const fetchVendors = () => {
	return makeRequest(`/api/vendors`, "get");
};

if (window.location.pathname.includes("search.html")) {
	const urlParams = new URLSearchParams(window.location.search);
	const search = urlParams.get("search");
	handleSearch(search)
		.then(data => {
			if (data.length > 0) {
				data.forEach(vendor => {
					let img = null;
					vendor.vendorID > 4
						? (img = imgUrls[vendor.vendorID - 5])
						: (img = imgUrls[vendor.vendorID - 1]);
					searchList.innerHTML += `<article class="card search-card">
                <div class="card-img">
                    <img src=${img} alt="Vendor Image" />
                </div>
                <div class="card-details">
                    <p>${vendor.firstName} ${vendor.lastName}</p>
                    <p>${vendor.campus}</p>
                    <a href="vendor-profile.html?id=${
											vendor.vendorID
										}" class="btn">View Profile</a>
                </div>
            </article>`;
				});
			} else {
				searchList.innerHTML += `<p>No vendor matching the search found</p>`;
			}
		})
		.catch(err => console.log(err.message));
}

const profile = document.querySelector(".profile");

if (window.location.pathname.includes("vendor-profile.html")) {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	fetchVendor(id)
		.then(data => {
			if (data.length > 0) {
                const vendor = data[0];
                let img = null;
					vendor.vendorID > 4
						? (img = imgUrls[vendor.vendorID - 5])
						: (img = imgUrls[vendor.vendorID - 1]);
				profile.innerHTML += `<div class="profile-img">
            <img src=${img} alt="Vendor Profile Pic" />
        </div>
        <div class="profile-details">
                <p>Name: ${vendor.firstName} ${vendor.lastName}</p>
                <p>Service: ${vendor.service}</p>
                <p>Campus: ${vendor.campus}</p>
                <p>Years of Experience: 3</p>
                <p>Phone: ${vendor.phoneNumber}</p>
                <p>
                    Bio: I build world class Software solutions that scales. I'm available for any job.
                </p>
            <button class="inverse">Book Now</button>
        </div>`;
			} else {
				profile.innerHTML += `<p>Vendor with that ID does not exist</p>`;
			}
		})
		.catch(err => console.log(err.message));
}

const vendorsList = document.querySelector(".vendors-list");

if (window.location.pathname.includes("all-vendors.html")) {
	fetchVendors()
		.then(data => {
			if (data.length > 0) {
				data.forEach(vendor => {
                    let img = null;
					vendor.vendorID > 4
						? (img = imgUrls[vendor.vendorID - 5])
						: (img = imgUrls[vendor.vendorID - 1]);
					vendorsList.innerHTML += `<article class="card search-card">
                <div class="card-img">
                    <img src=${img} alt="Vendor Image" />
                </div>
                <div class="card-details">
                    <p>${vendor.firstName} ${vendor.lastName}</p>
                    <p>${vendor.campus}</p>
                    <a href="vendor-profile.html?id=${
											vendor.vendorID
										}" class="btn">View Profile</a>
                </div>
            </article>`;
				});
			} else {
				vendorsList.innerHTML += `<p>No Vendors found.</p>`;
			}
		})
		.catch(err => console.log(err.message));
}
