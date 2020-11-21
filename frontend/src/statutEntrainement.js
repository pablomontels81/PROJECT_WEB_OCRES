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
		sport : "moyen",
		charge : "élevée"
		};
	}

	render(){
		return (
			<div className ="statutentrainement">
				<Titre name={this.state.name}/>

				<Container fluid className="container">   

          			<div className="Container1">

						<div className="Container2">
							<p className="cercle">
								{this.state.sport}
							</p>
						</div>

						<div className="Container2">
							<p className="cercle">
								{this.state.charge}
							</p>
						</div>

          			</div>

          		</Container>





			</div>
		);
	}


}
export default StatutEntrainement;