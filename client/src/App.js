import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from './containers/Search/Search';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/search" component={Search} />
			</Switch>
		);
	}
}

export default App;
