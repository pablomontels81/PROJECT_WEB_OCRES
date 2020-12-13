import React from 'react';

import './sommeil.css';
import Titre from './Titre';
import lune from './image/lune.png';
import axios from 'axios';

class Sommeil extends React.Component {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Analyse Sommeil",
		  profond : "",
		  leger : "",
		  rem : "",
		  total : "",
		  horaire_debut: "",
		  horaire_fin: "",
		  heureDebut: "",
		  minuteDebut: "",
		  heureFin: "",
		  minuteFin: "",
		  minTot: "",
		};
	}

	async componentDidMount() {

		try{

			await axios.get('http://localhost:3001/sommeils/lastsleep')
				.then( response => {
					if (response.data.horaire_debut) {
						this.setState({
							horaire_debut: response.data.horaire_debut,
						})
					}
					else throw Error("manque horaire_debut");

					if (response.data.horaire_fin) {
						this.setState({
							horaire_fin: response.data.horaire_fin,
						})
					}
					else throw Error("manque horaire_fin");

				}).catch( err => {
					console.log(err)
				})

			//Split heures et minutes début
			this.setState({
				heureDebut: this.state.horaire_debut.split(":")[0],
				minuteDebut: this.state.horaire_debut.split(":")[1],
				
			}) 

			//Split heure et minutes fin
			this.setState({
				heureFin: this.state.horaire_fin.split(":")[0],
				minuteFin: this.state.horaire_fin.split(":")[1],
			}) 

			//Calcul minutes totales de sommeil
			this.setState({
				minTot: (parseInt(this.state.heureFin, 10) + 24 - parseInt(this.state.heureDebut, 10))*60 + (parseInt(this.state.minuteFin) - parseInt(this.state.minuteDebut)),
			})

			//Calcul minutes sommeil profond
			this.setState({
				profond: (parseInt(this.state.minTot, 10) / 4 ),
			})

			//Calcul minutes sommeil léger
			this.setState({
				leger: (parseInt(this.state.minTot, 10) * (3/4) ),
			})

			//Calcul minutes REM
			this.setState({
				rem: (parseInt(this.state.minTot, 10) / 2 ),
			})

		}
		catch(err){
			console.log(err)
		}

	}

	render(){
		return (
			<div className ="sommeil">
				<Titre name={this.state.name}/>
				<div className="container1">
					<div className="container2">
						<p className="profond">Profond</p>
						<p className="result">{this.state.profond} min</p>
						<p className="reveille">Réveille</p>
						<p className="result">{this.state.horaire_fin}</p>
					</div>
					<div>
						<img className="image" src={lune}/>
						<p className="result">{this.state.minTot} min</p>
					</div>
					<div className="container2">
						<p className="leger">Léger</p>
						<p className="result">{this.state.leger} min</p>
						<p className="rem">REM</p>
						<p className="result">{this.state.rem} min</p>
					</div>
				</div>
			</div>

		);
	}


}
export default Sommeil;