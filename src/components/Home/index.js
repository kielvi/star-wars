import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
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

import Loading from "../Loading";
import SingleFilm from '../SingleFilm';
import data from '../../data/cacheFilms.json'

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: message => {},
  hideLoading: () => {}
});

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			films: '',
			episode: "", 
			error: null,
		    loading: false
		}

		this.axiosAllFilms = this.axiosAllFilms.bind(this);
	}

	showLoading = () => this.setState({ loading: true });
	hideLoading = () => this.setState({ loading: false });


	axiosAllFilms() {
		axios(`${PATH_BASE}${PATH_SEARCH}?${PATH_FORMAT}`)
		//axios(`${PATH_SEARCH}?${PATH_FORMAT}`)
			.then(result => this.searchAllFilms(result.data))
			.catch(result => this.searchAllFilms(data));
	}

	searchAllFilms(result) {
		const { results } = result;
		
		this.setState({ 
			films: results
		});
		this.showLoading();

	}
	componentDidMount() {

		this.axiosAllFilms();
		this.hideLoading();
	}

	render() {
		const {
			films, 
			loading
		} = this.state;
		
		const listFilms = (
			films
		) || [];


		return (

			
				<div>
				{
					loading ? (
						<div className="table">
							{listFilms.map(item =>
								<div key={item.episode_id} className="table-item">
									<div className="table-item-title">
										<Link to={{ pathname: `films/${item.episode_id}`, state: { films: listFilms} }}>
				        					<span>Episódio {item.episode_id}</span> {item.title}
				        				</Link>
				      				</div>
				      				<div className="table-item-date">Data de lançamento: {(new Date(item.release_date)).toLocaleDateString()}</div>

				      				<div className="table-item-description">{item.opening_crawl}</div>

				      				<Link to={{ pathname: `films/${item.episode_id}`, state: { films: listFilms} }} className="table-item-mais">Ver mais</Link>
								</div>
							)}
						</div>
					) : (
						<Loading />
					)
				}
			</div>



		)
	}
}

export default Home;