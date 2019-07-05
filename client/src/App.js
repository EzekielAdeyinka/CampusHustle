import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import AllVendors from "./containers/AllVendors/AllVendors";
import Dashboard from "./containers/Dashboard/Dashboard";
import VendorProfile from "./containers/VendorProfile/VendorProfile";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/all-vendors" component={AllVendors} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/vendor-profile" component={VendorProfile} />
			</Switch>
		);
	}
}

export default App;
