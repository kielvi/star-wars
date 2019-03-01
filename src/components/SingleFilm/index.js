import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import {
	Route,
	Link,
	Redirect,
	Switch,
	BrowserRouter as Router,
} from 'react-router-dom';
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


/*
const SingleFilm = ({ current_film, backFilms }) => {
	console.log('')
	return (
		<div className="movie">
			dd
		</div>
	);
}*/

class SingleFilm extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
		console.log(this)
		return (
			<div className="App">
				ss
			</div>
		)
	}

}

/*class SingleFilm extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
			

		}

		//this.accessFilm				= this.accessFilm.bind(this);
		//this.backFilms				= this.backFilms.bind(this);
	}

	accessFilm(url) {
		const { results } = results;


		axios(`${url}`)
			.then(receive_result)
			.catch(receive_error);

		var self = this;
		alert(self);

		function receive_result(result){
			if( !self._isMounted ) return;
			self.setFilm(result.data)
		}
		function receive_error(error){
			if( !this._isMounted ) return; 
			self.setState({ error })
		}
	}

	setFilm(data){
		alert('')
		this.setState({
			is_single: true,
			current_film: ""
		});

	}

	searchAllFilms(result) {
		const { results, page } = result;
		const id = this.props.match.params.id;

		const isId = item => item.episode_id == id;

		const updateFilm = results.filter(isId);

		this.setState({ 
			current_film: updateFilm 
		});
		


	}
	axiosAllFilms() {
		axios(`${PATH_BASE}${PATH_SEARCH}?${PATH_FORMAT}`)
			.then(result => this._isMounted && this.searchAllFilms(result.data))
			.catch(error => this._isMounted && this.setState({ error }));
	}


	componentDidMount() {
		this._isMounted = true;

		this.axiosAllFilms();
	}

	componentWillUnmount() {
		this._isMounted = false;
		
	}



	backFilms(data){
		const { allResults } = this.state;
		
		this.setState({
			
		});
	}


	render() {
		
		const {
			current_film, 
			backFilms
		} = this.state;

		return (
			<div className="App">
				<Header />
				<div className="movie">
					<div className="movie-item">
						<div className="movie-item-title">
		    				
		  				</div>

						<div className="mobie-item-data">
							current_film.title
						</div>

						<div>
							<button onClick={() => backFilms()}>back</button>
						</div>

						
					</div>
				</div>
			</div>
		);
	}
}*/





/*

*/


export default SingleFilm;