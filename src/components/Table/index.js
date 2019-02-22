import React, { Component } from 'react';
import './index.css';

import {
	PATH_BASE,
	PATH_SEARCH,
	PARAM_SEARCH, 
	largeColunm, 
	midColumn, 
	smallColumn
} from '../../constants';

class TitleFilm extends Component {
  render() {
    return (

		<div className="table-item-title">
			<a 
				href={'#'}
			        className={ this.props.className }
			        onClick={ this.props.toggleClassName }
			>
				{ this.props.children }
				<span>+</span>
			</a>

		</div>

    )    
  }
}

const Table = ({ list, condition, handleClick }) => {
	
	return (
		<div className="table">
			{list.map(item =>
				<div key={item.episode_id} className={ condition ? "table-item toggled" : "table-item" }>
					<TitleFilm        
        				
        				toggleClassName={handleClick}
      				>
        				{item.title}
      				</TitleFilm>




					<div className="table-item-data">
						ss
					</div>
						

					
				</div>
			)}
		</div>
	);
}





/*className={ condition ? "button toggled" : "button" }
					<span style={largeColunm}>
						<a href={item.url}>{item.title}</a>
					</span>
					<span style={midColumn}>{item.author}</span>
					<span style={smallColumn}>{item.num_comments}</span>
					<span style={smallColumn}>{item.points}</span>
*/
export default Table;