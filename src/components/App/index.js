import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

import {
	DEFAULT_QUERY,
	DEFAULT_HPP,
	PATH_BASE,
	PATH_SEARCH,
	PARAM_SEARCH,
	PARAM_PAGE,
	PARAM_HPP
} from '../../constants';
import Table from '../Table';





class App extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
			condition: false,
			allResults: null,
			searchFilms: '',
			searchTerm: DEFAULT_QUERY,
			error: null, 
		}

		this.handleClick = this.handleClick.bind(this)
		this.setSearchTopStories	= this.setSearchTopStories.bind(this);
		this.fetchSearchTopStories	= this.fetchSearchTopStories.bind(this);
	}

  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

	setSearchTopStories(result) {
		const { results, page } = result;
		const { searchFilms, allResults } = this.state;


		const updatedResults = [
			...results
		];

		this.setState({
			allResults: {
				[searchFilms]: { results: updatedResults, page }
			}
		});
	}

	fetchSearchTopStories(searchTerm, page = 0) {
			axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}`)
			.then(result => this._isMounted && this.setSearchTopStories(result.data))
			.catch(error => this._isMounted && this.setState({ error }));
	}

	componentDidMount() {
		this._isMounted = true;

		const { searchTerm } = this.state;

		this.setState({ searchFilms: searchTerm });
		this.fetchSearchTopStories(searchTerm);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	onSearchChange = (event) => {
		this.setState({ searchTerm: event.target.value })
	}





	render() {

		const {
			searchTerm, 
			allResults,
			searchFilms,
			error,
			condition
		} = this.state;
		
		const page = (
			allResults && 
			allResults[searchFilms] &&
			allResults[searchFilms].page
		) || 0;

		const list = (
			allResults && 
			allResults[searchFilms] &&
			allResults[searchFilms].results
		) || [];



		return (
			<div className="App">
				<header>
					<div class="starwars-demo">
						<img src={'//cssanimation.rocks/demo/starwars/images/star.svg'} alt="Star" className="star"/>
						<img src={'//cssanimation.rocks/demo/starwars/images/wars.svg'} alt="Wars" className="wars"/>
						<h2 class="byline" id="byline">Challenge Ilegra</h2>
					</div>
				</header>
				<main>

						<Table 
							list={list}
							handleClick={this.handleClick}
							condition={condition}
						/>
				</main>
				<footer>

				</footer>
			</div>
		);
	}
}


export default App;