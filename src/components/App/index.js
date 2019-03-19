import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import './index.css';

import {
	DEFAULT_HPP,
	PATH_BASE,
	PATH_SEARCH,
	PATH_FORMAT,
	PARAM_PAGE,
	PARAM_HPP, 
	PATH_ID
} from '../../constants';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import SingleFilm from '../SingleFilm';

import createBrowserHistory from "history/createBrowserHistory";





class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
							<Route exact path="/films/" render={({match}) => ( <h1>Welcome movies</h1> )} />
								<Route exact path="/films/:episode_id" component={SingleFilm} />
							<Route />
						<Route />
					</Switch>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}
}

export default App;