import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import AllVendors from "./containers/AllVendors/AllVendors";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/all-vendors" component={AllVendors} />
			</Switch>
		);
	}
}

export default App;
