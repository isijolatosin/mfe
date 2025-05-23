import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
	return (
		<div>
			<StylesProvider>
				<BrowserRouter>
					<Switch>
						<Route path="/pricing" component={Pricing} />
						<Route path="/" component={Landing} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	);
};

export { App };
export default App;
