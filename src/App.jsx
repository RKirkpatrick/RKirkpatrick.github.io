//import "highlight.js/styles/default.css";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
	let history = useHistory();
	useEffect(() => {
		let path = localStorage.getItem("path");
		if (path) {
			localStorage.removeItem("path");
			history.replace(path);
		}
	}, []);

	return (
		<>
			<Switch>
				<Route path="/">
					<Layout />
				</Route>
			</Switch>
		</>
	);
}

export default App;
