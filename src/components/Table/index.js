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
import SingleFilm from '../SingleFilm';


class Table extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
			films: '',
			error: null, 
		}

		this.axiosAllFilms = this.axiosAllFilms.bind(this);
	}

	axiosAllFilms() {

		axios(`${PATH_BASE}${PATH_SEARCH}?${PATH_FORMAT}`)
			.then(result => this._isMounted && this.searchAllFilms(result.data))
			.catch(error => this._isMounted && this.setState({ error }));
	}
	searchAllFilms(result) {
		const { results } = result;
		
		this.setState({ 
			films: results 
		});

	}
	componentDidMount() {
		this._isMounted = true;

		this.axiosAllFilms();
	}
	componentWillUnmount() {
		//this._isMounted = false;

	}


	render() {
		const {
			films
		} = this.state;
		

		const listFilms = (
			films
		) || [];

		return (
			<div className="table">
				{listFilms.map(item =>
					<div key={item.episode_id} className="table-item">
						<div className="table-item-title">
							<Link to={`films/${item.episode_id}`}>
	        					{item.title}
	        				</Link>
	      				</div>
					</div>
				)}
			</div>
		)
	}
}









/*
class Table extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
			is_single: false,
			allResults: null,
			searchKey: PATH_ID,
			searchFilm: '',
			error: null, 
		}

		
		this.searchAllFilms			= this.searchAllFilms.bind(this);
		this.fetchSearchTopStories	= this.fetchSearchTopStories.bind(this);
	}

	searchAllFilms(result) {
		const { results, page } = result;
		const { searchKey, allResults } = this.state;


		const updatedResults = [
			...results
		];

		this.setState({
			allResults: {
				[searchKey]: { results: updatedResults, page }
			}
		});
	}

	fetchSearchTopStories(searchFilm, page = 0) {
			axios(`${PATH_BASE}${PATH_SEARCH}?${PATH_FORMAT}`)
			.then(result => this._isMounted && this.searchAllFilms(result.data))
			.catch(error => this._isMounted && this.setState({ error }));
	}

	componentDidMount() {
		this._isMounted = true;

		const { searchFilm } = this.state;

		this.setState({ searchKey: searchFilm });
		this.fetchSearchTopStories(searchFilm);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}


	render() {
		const { children } = this.props;
		const {
			accessFilm, 
			allResults,
			searchKey,
			error,
		} = this.state;
		
		const page = (
			allResults && 
			allResults[searchKey] &&
			allResults[searchKey].page
		) || 0;

		const list = (
			allResults && 
			allResults[searchKey] &&
			allResults[searchKey].results
		) || [];

		//let contents = '';
		//if (is_single) {
		//	//contents = <SingleFilm current_film={current_film} backFilms={this.backFilms} />;
		//} else {
		//	contents = <Table list={list} accessFilm={this.accessFilm} />
		//}

		return (
		<div className="table">
			{list.map(item =>
				<div key={item.episode_id} className="table-item">
					<div className="table-item-title">
						<Link to={`films/${item.episode_id}`}>
        					{item.title}
        				</Link>
      				</div>
				</div>
			)}
		</div>
					

		);
	}

}
*/

export default Table;

/*const Table = ({ list,  accessFilm }) => {
	return (

	);
}

export default Table;*/