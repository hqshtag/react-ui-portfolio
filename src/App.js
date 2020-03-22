import React from "react";

import Contact from "./myportfolio/content/contact/Contact";
import Home from "./myportfolio/Home";

import "./myportfolio/responsive.scss";
//import Navbur from './myportfolio/header/Navbur';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Maintance from "./Maintenace.UI";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Maintance} />
    </Router>
  );
  /* 	redirectToRealRoute();
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/contact" component={Contact} />
		</Router>
	); */
}

export default App;

//url control

const redirectToRealRoute = () => {
  let routes = ["/", "/contact", "/404"];
  let path = document.location.pathname;
  if (!routes.includes(path)) {
    let origin = document.location.origin;
    let newUrl = unkownPathHandler();
    document.location.href = origin + newUrl;
  }
  return true;
};

const unkownPathHandler = () => "/";
