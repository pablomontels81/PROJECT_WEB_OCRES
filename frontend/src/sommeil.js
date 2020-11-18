import React from 'react';

import './sommeil.css';
import Titre from './Titre';

class Sommeil extends React.Component {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Analyse Sommeil"
		};
	}

	render(){
		return (
			<div className ="sommeil">
				<Titre name={this.state.name}/>
			</div>
		);
	}


}
export default Sommeil;