import React from 'react';

import './statutEntrainement.css';
import Titre from './Titre';

class StatutEntrainement extends React.Component {
	
	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Statut d'Entraînement"
		};
	}

	render(){
		return (
			<div className ="statutentrainement">
				<Titre name={this.state.name}/>
			</div>
		);
	}


}
export default StatutEntrainement;