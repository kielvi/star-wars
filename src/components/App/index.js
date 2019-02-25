import React, { Component } from 'react';
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
import Table from '../Table';





class App extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
			is_single: false,
			allResults: null,
			searchKey: '',
			searchTerm: PATH_ID,
			error: null, 
		}

		//this.handleClick = this.handleClick.bind(this)
		this.accessFilm				= this.accessFilm.bind(this);
		this.setSearchTopStories	= this.setSearchTopStories.bind(this);
		this.fetchSearchTopStories	= this.fetchSearchTopStories.bind(this);
	}

  /*handleClick() {
    this.setState({
      condition: !this.state.condition
    })
    console.log(this)
  }*/

	accessFilm(id) {
		const { searchKey, allResults } = this.state;
		const { results, page } = allResults[searchKey];

		const isNotId = item => item.episode_id == id;
		const updateFilm = results.filter(isNotId);
		
		this.setState({
			is_single: !this.state.is_single,
			allResults: {
				[searchKey]: { results: updateFilm, page }
			}
		});
		console.log(this.state)
	}

	setSearchTopStories(result) {
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
		console.log(this.state)
	}

	fetchSearchTopStories(searchTerm, page = 0) {
			axios(`${PATH_BASE}${PATH_SEARCH}?${PATH_FORMAT}`)
			.then(result => this._isMounted && this.setSearchTopStories(result.data))
			.catch(error => this._isMounted && this.setState({ error }));
	}

	componentDidMount() {
		this._isMounted = true;

		const { searchTerm } = this.state;

		this.setState({ searchKey: searchTerm });
		this.fetchSearchTopStories(searchTerm);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}




	render() {

		const {
			searchTerm, 
			allResults,
			searchKey,
			error
			//condition
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


		return (
			<div className="App">
				<header>
					<div className="starwars-demo">
						<img src={'//cssanimation.rocks/demo/starwars/images/star.svg'} alt="Star" className="star"/>
						<img src={'//cssanimation.rocks/demo/starwars/images/wars.svg'} alt="Wars" className="wars"/>
						<h2 className="byline" id="byline">Challenge Ilegra</h2>
					</div>
				</header>
				<main>

						<Table 
							list={list}
							accessFilm={this.accessFilm}
						/>
				</main>
				<footer>

				</footer>
			</div>
		);
	}
}


export default App;