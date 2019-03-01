import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';



class Header extends Component {



	render() {

		return (
				<header>
					<div className="starwars-demo">
						<img src={'//cssanimation.rocks/demo/starwars/images/star.svg'} alt="Star" className="star"/>
						<img src={'//cssanimation.rocks/demo/starwars/images/wars.svg'} alt="Wars" className="wars"/>
						<h2 className="byline" id="byline">Challenge Ilegra</h2>
					</div>
				</header>
		);
	}
}


export default Header;