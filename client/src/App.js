import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "./components/UI/Loading/Loading";
import Home from "./containers/Home/Home";
const Search = lazy(() => import("./containers/Search/Search"));
const AllVendors = lazy(() => import("./containers/AllVendors/AllVendors"));
const Dashboard = lazy(() => import("./containers/Dashboard/Dashboard"));
const VendorProfile = lazy(() =>
	import("./containers/VendorProfile/VendorProfile")
);
const VendorSignup = lazy(() =>
	import("./containers/VendorSignup/VendorSignup")
);
const VendorLogin = lazy(() => import("./containers/VendorLogin/VendorLogin"));
const NotFound = lazy(() => import("./components/UI/NotFound/Notfound"));

class App extends Component {
	render() {
		const ProtectedVendorRoute = ({ component: Component, ...rest }) => (
			<Route
				{...rest}
				render={props =>
					this.props.vendorAuthenticated ? (
						<Suspense fallback={<Loading />}>
							<Component {...props} />
						</Suspense>
					) : (
						<Redirect to="/vendor-login" />
					)
				}
			/>
		);

		const LazyRoute = ({ component: Component, ...rest }) => (
			<Route
				{...rest}
				render={props => (
					<Suspense fallback={<Loading />}>
						<Component {...props} />
					</Suspense>
				)}
			/>
		);
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<LazyRoute path="/search" component={Search} />
				<LazyRoute path="/all-vendors" component={AllVendors} />
				<ProtectedVendorRoute path="/dashboard" component={Dashboard} />
				<LazyRoute path="/vendor-profile" component={VendorProfile} />
				<LazyRoute path="/vendor-signup" component={VendorSignup} />
				<LazyRoute path="/vendor-login" component={VendorLogin} />
				<LazyRoute component={NotFound} />
			</Switch>
		);
	}
}

export default App;
