import React from 'react';
import axios from 'axios';

import course from './image/course.png';
import velo from './image/velo.png';
import natation from './image/natation.png';

import './record.css';
import Titre from './Titre';

class Record extends React.Component {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Records Personnels",
		  distanceVelo1 : "20",
		  allureVelo1: "",
		  tempsVelo1 : "",
		  distanceVelo2 : "40",
		  allureVelo2: "",
		  tempsVelo2 : "",
		  distanceCourse1 : "5",
		  allureCourse1: "",
		  tempsCourse1 : "",
		  distanceCourse2 : "10",
		  allureCourse2: "",
		  tempsCourse2 : "",
		  distanceNatation1 : "0.400",
		  allureNat1: "",
		  tempsNatation1 : "",
		  distanceNatation2 : "1",
		  allureNat2: "",
		  tempsNatation2 : "",
		};
	}

	async componentDidMount() {

		try{
			await axios.get('http://localhost:3001/activities/20KBikeRecord')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							allureVelo1: response.data[0].Vitesse_moy,
						})
					}
				}).catch( err => {
					console.log(err)
				});

			await axios.get('http://localhost:3001/activities/40KBikeRecord')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							allureVelo2: response.data[0].Vitesse_moy,
						})
					}
				}).catch( err => {
					console.log(err)
				});

			await axios.get('http://localhost:3001/activities/5KRunRecord')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							allureCourse1: response.data[0].Vitesse_moy,
						})
					}
				}).catch( err => {
					console.log(err)
				});

			await axios.get('http://localhost:3001/activities/10KRunRecord')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							allureCourse2: response.data[0].Vitesse_moy,
						})
					}
				}).catch( err => {
					console.log(err)
				});
			
			await axios.get('http://localhost:3001/activities/SwimRecord1')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							allureNat1: response.data[0].Vitesse_moy,
						})
					}
				}).catch( err => {
					console.log(err)
				});

			await axios.get('http://localhost:3001/activities/SwimRecord2')
				.then( response => {
					if (response.data.length >0) {
						this.setState({
							allureNat2: response.data[0].Vitesse_moy,
						})
					}
				}).catch( err => {
					console.log(err)
				});

			this.setState({
				tempsVelo1 : Math.round((parseInt(this.state.distanceVelo1,10)/parseInt(this.state.allureVelo1,10))*60),
				tempsVelo2 : Math.round((parseInt(this.state.distanceVelo2,10)/parseInt(this.state.allureVelo2,10))*60),
				tempsCourse1 : Math.round((parseInt(this.state.distanceCourse1,10)/parseInt(this.state.allureCourse1,10))*60),
				tempsCourse2 : Math.round((parseInt(this.state.distanceCourse2,10)/parseInt(this.state.allureCourse2,10))*60),
				tempsNatation1 : Math.round((parseInt(this.state.distanceNatation1,10)/parseInt(this.state.allureNat1,10))*60),
				tempsNatation2 : Math.round((parseInt(this.state.distanceNatation2,10)/parseInt(this.state.allureNat2,10))*60),
			})

			console.log(this.state);
		}
		catch(err){
			console.log(err)
		}		
    }

	render(){

		return (
			<div className="record">
				<Titre name={this.state.name}/>
				<div className="container-1">
					<div className="container-2">
						<p>
							<div className="distance-velo">{this.state.distanceVelo1} km</div>
							<div className="temps">{this.state.tempsVelo1} min</div>
						</p>
						<p>
							<div className="distance-course">{this.state.distanceCourse1} km</div>
							<div className="temps">{this.state.tempsCourse1} min</div>
						</p>
						<p>
							<div className="distance-natation">{this.state.distanceNatation1} km</div>
							<div className="temps">{this.state.tempsNatation1} min</div>
						</p>
						
					</div>
					<div className="container-2">
						<img className="image" src={velo}/>
						<img className="image" src={course}/>
						<img className="image" src={natation}/>
					</div>
					<div className="container-2">
						<p>
							<div className="distance-velo">{this.state.distanceVelo2} km</div>
							<div className="temps">{this.state.tempsVelo2} min</div>
						</p>
						<p>
							<div className="distance-course">{this.state.distanceCourse2} km</div>
							<div className="temps">{this.state.tempsCourse2} min</div>
						</p>
						<p>
							<div className="distance-natation">{this.state.distanceNatation2} km</div>
							<div className="temps">{this.state.tempsNatation2} min</div>
						</p>
					</div>
				</div>
			</div>
		);
	}


}
export default Record;