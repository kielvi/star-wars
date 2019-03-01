import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import Table from './components/Table';
import SingleFilm from './components/SingleFilm';
import Error404 from './components/Error404';


const Home = () => {
    return(
        <div>
            <h3>{'Welcome Home !!'}</h3>
        </div>
         
    );
};
render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
				<Route component={Home} />
				<Route exact path="/films/" render={() => ( <h1>Welcome</h1> )} />
				<Route path="/films/:id" component={SingleFilm} />
			<Route/>
		</Switch>
	</BrowserRouter>
), document.getElementById('root'));

if(module.hot) {
	module.hot.accept();
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
/*<Route path="/film/:id" component={SingleFilm} />*/