import React from 'react';

import './statutEntrainement.css';
import Titre from './Titre';

import Container from 'react-bootstrap/Container';

class StatutEntrainement extends React.Component {
	
	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Statut d'Entraînement",
		statut : "Productif",
		sport : "moyen",
		charge : "élevée"
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