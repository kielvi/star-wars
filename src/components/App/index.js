import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  Link,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
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
import Table from '../Table';
import SingleFilm from '../SingleFilm';


const App = (props) => {
    return (
        <div>
            {props.children}
        </div>

    );

};
/*
class App extends Component {
	render() {
		const { children } = this.props;

		return (
			<div className="App">
				<Header />
				<main>
					<Table />
				</main>
				<footer>

				</footer>
				
				
			</div>
		);
	}
}
*/

export default App;