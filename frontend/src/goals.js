import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import course from './image/course.png';
import velo from './image/velo.png';
import natation from './image/natation.png';


import './goals.css';
import Titre from './Titre';

class Goals extends React.Component {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Buts",
		  velo : "",
		  course : "",
		  natation : "",
		  velo_goal : "",
		  course_goal : "",
		  natation_goal : "",
		  velo_distance: "",
		  course_distance: "",
		  natation_distance: "",};
	}

	async componentDidMount() {
		//Récupération des BUts fixés
		try{
			console.log(this.state)
			await axios.get('http://localhost:3001/goals/')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							velo_goal: response.data[0].velo_goal,
							course_goal: response.data[0].course_goal,
							natation_goal: response.data[0].natation_goal,
						})
						console.log(this.state.velo_goal)
					}
				}).catch( err => {
					console.log(err)
				})
			//Récupération de la Distance Velo effectué par l'utilisateur
			await axios.get('http://localhost:3001/activities/sumbike')
				.then(response => {
					if (response.data.length >0) {
						this.setState({
							velo_distance: response.data[0].Distance
						})
					}
				}).catch( err => {
					console.log(err)
				})
			//Récupération de la Distance Course effectué par l'utilisateur
			await axios.get('http://localhost:3001/activities/sumrun')
				.then(response => {
					if (response.data.length >0) {
						this.setState({
							course_distance: response.data[0].Distance
						})
					}
				}).catch( err => {
					console.log(err)
				})
			//Récupération de la Distance Natation effectué par l'utilisateur
			await axios.get('http://localhost:3001/activities/sumswim')
				.then(response => {
					if (response.data.length >0) {
						this.setState({
							natation_distance: response.data[0].Distance
						})
					}
				}).catch( err => {
					console.log(err)
				})
			
			
			//Calcul % Velo
			this.setState({
				velo: Math.round(parseInt(this.state.velo_distance,10) / parseInt(this.state.velo_goal,10)*100),
			}) 
			//Calcul % Course
			this.setState({
				course: Math.round(parseInt(this.state.course_distance,10) / parseInt(this.state.course_goal,10)*100),
			}) 
			//Calcul % Natation
			this.setState({
				natation: Math.round(parseInt(this.state.natation_distance,10) / parseInt(this.state.natation_goal,10)*100),
			}) 
			
			console.log(this.state)
		}
		catch(err){
			console.log(err)
		}
	}
	
	render(){
		return (
			<div className="goals">
				<Titre name={this.state.name}/>

				<Container fluid className="container">   

          			<div className="Container1">

						<div className="Container2">
							<img src={course} className="image"/>
							<p className="cercle couleur-course ecriture">
								{this.state.course}%
							</p>
						</div>

						<div className="Container2">
							<img src={velo} className="image"/>
							<p className="cercle couleur-velo ecriture">
								{this.state.velo}%
							</p>
						</div>

						<div className="Container2">
							<img src={natation} className="image"/>
							<p className="cercle couleur-natation ecriture">
								{this.state.natation}%
							</p>
						</div>

          			</div>

          		</Container>

			</div>
		);
	}


}
export default Goals;