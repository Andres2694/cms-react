import React, {Component} from "react";
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRoutes from "./Routes";
import {BrowserRouter as Router} from  "react-router-dom";

render(
<Router>
	<AppRoutes/>
</Router>
,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
