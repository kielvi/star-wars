import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';


render((
	<App />
), document.getElementById('root'));

if(module.hot) {
	module.hot.accept();
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
/*<Route path="/film/:id" component={SingleFilm} />*/