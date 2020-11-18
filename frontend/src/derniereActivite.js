import React from 'react';

import './derniereActivite.css';
import Titre from './Titre';

class DerniereActivite extends React.Component {

	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Dernière Activitée"
		};
	}

	render(){

		return (
			<div className ="derniereactivitee">
				<Titre name={this.state.name}/>
			</div>
		);
	}
}

export default DerniereActivite;