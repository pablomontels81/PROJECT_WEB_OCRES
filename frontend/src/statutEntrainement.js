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
		sumrun: 0,
		sumbike: 0,
		sumswim: 0,
		course : "",
		velo : "",
		natation : "",
		course_goal: "",
		velo_goal: "",
		natation_goal: "",
		tot: "",
		};
	}

	async componentDidMount() {
		
		try{
			//Récupération des totaux des distances de la semaine d'avant

			//Récupération de la somme des distances de course sur la semaine d'avant
			await axios.get('http://localhost:3001/activities/sumrunweek')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							sumrun: response.data[0].Distance,
						})
					}
				}).catch( err => {
					console.log(err)
				})

			//Récupération de la somme des distances de vélo sur la semaine d'avant
			await axios.get('http://localhost:3001/activities/sumbikeweek')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							sumbike: response.data[0].Distance,
						})
					}
			}).catch( err => {
				console.log(err)
			})

			//Récupération de la somme des distances de vélo sur la semaine d'avant
			await axios.get('http://localhost:3001/activities/sumswimweek')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							sumswim: response.data[0].Distance,
						})
					}
			}).catch( err => {
				console.log(err)
			})

			//Récupération des goals
			await axios.get('http://localhost:3001/goals/')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							velo_goal: response.data[0].velo_goal,
							course_goal: response.data[0].course_goal,
							natation_goal: response.data[0].natation_goal,
						})
					}
				}).catch( err => {
					console.log(err)
				})

			//Calcul % Course
			this.setState({
				course: Math.round(parseInt(this.state.sumrun,10) / (parseInt(this.state.course_goal,10)/4)*100),
			}) 
			console.log(this.state.course);

			//Calcul % Velo
			this.setState({
				velo: Math.round(parseInt(this.state.sumbike,10) / (parseInt(this.state.velo_goal,10)/4)*100),
			}) 
			console.log(this.state.velo);

			//Calcul % Natation
			this.setState({
				natation: Math.round(parseInt(this.state.sumswim,10) / (parseInt(this.state.natation_goal,10)/4)*100),
			}) 
			console.log(this.state.natation);

			//Calcul % total
			this.setState({
				tot: Math.round(parseInt(this.state.sumrun,10) + parseInt(this.state.sumbike,10) + parseInt(this.state.sumswim,10)),

			}) 
			console.log(this.state.tot);

			if(parseInt(this.state.tot) >= 125)
			{
				this.setState({
					statut: "PIC",
					sport: "=",
					charge:"+",
				})
			}
			else if(parseInt(this.state.tot) >= 100 && parseInt(this.state.tot) < 125)
			{
				this.setState({
					statut: "Productif",
					sport: "+",
					charge: "+",
				})
			}
			else if(parseInt(this.state.tot) >= 75 && parseInt(this.state.tot) < 100)
			{
				this.setState({
					statut: "Maintient",
					sport: "-",
					charge: "=",
				})
			}
			else {
				this.setState({
					statut: "Récupération",
					sport: "-",
					charge: "-",
				})
			}

		}
		catch(err){
			console.log(err)
		}
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