import React from 'react';
import axios from 'axios';

import './statutEntrainement.css';
import Titre from './Titre';


class StatutEntrainement extends React.Component {
	
	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Statut d'Entraînement",
		statut : "",
		sport : "",
		charge : "",
		sumrun: "",
		};
	}

	

	render(){
		return (
			<div className ="statutentrainement">
				<Titre name={this.state.name}/>
				<p className="productif">{this.state.statut}</p>
				<div className="Container1">
					<div className="Container2">
						<p className="style">Sport</p>
						<p className="cercle1 ecriture">
							{this.state.sport}
						</p>
					</div>
					<div className="Container2">
						<p className="style">Charge</p>
						<p className="cercle1 ecriture">
							{this.state.charge}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default StatutEntrainement;