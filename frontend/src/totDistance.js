import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import axios from 'axios';


import './totDistance.css';
import Titre from './Titre';
import Axios from 'axios';

class TotDistance extends React.PureComponent {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Distance Totale",
		  velo : "",
		  course : "",
		  natation : "",
		  monday_bike: "0",
		  monday_run: "0",
		  monday_swim: "0",
		  tuesday_bike: "0",
		  tuesday_run: "0",
		  tuesday_swim: "0",
		  wenesday_bike: "0",
		  wenesday_run: "0",
		  wenesday_swim: "0",
		  thursday_bike: "0",
		  thursday_run: "0",
		  thursday_swim: "0",
		  friday_bike: "0",
		  friday_run: "0",
		  friday_swim: "0",
		  saturday_bike: "0",
		  saturday_run: "0",
		  saturday_swim: "0",
		  sunday_bike: "0",
		  sunday_run: "0",
		  sunday_swim: "0",
		};
	}

	async componentDidMount(){
		try{
			//Récupération de la distance de course parcouru ce lundi
			await axios.get('http://localhost:3001/activities/sumrunmonday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						monday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce lundi
			await axios.get('http://localhost:3001/activities/sumbikemonday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						monday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce lundi
			await axios.get('http://localhost:3001/activities/sumswimmonday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						monday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})


			//Récupération de la distance de course parcouru ce mardi
			await axios.get('http://localhost:3001/activities/sumruntuesday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						tuesday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce mardi
			await axios.get('http://localhost:3001/activities/sumbiketuesday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						tuesday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce mardi
			await axios.get('http://localhost:3001/activities/sumswimtuesday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						tuesday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})


			//Récupération de la distance de course parcouru ce mercredi
			await axios.get('http://localhost:3001/activities/sumrunwednesday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						wenesday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce mercredi
			await axios.get('http://localhost:3001/activities/sumbikewednesday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						wenesday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce mercredi
			await axios.get('http://localhost:3001/activities/sumswimwednesday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						wenesday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})


			//Récupération de la distance de course parcouru ce jeudi
			await axios.get('http://localhost:3001/activities/sumrunthursday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						thursday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce jeudi
			await axios.get('http://localhost:3001/activities/sumbikethursday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						thursday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce jeudi
			await axios.get('http://localhost:3001/activities/sumswimthursday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						thursday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})


			//Récupération de la distance de course parcouru ce vendredi
			await axios.get('http://localhost:3001/activities/sumrunfriday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						friday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce vendredi
			await axios.get('http://localhost:3001/activities/sumbikefriday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						friday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce vendredi
			await axios.get('http://localhost:3001/activities/sumswimfriday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						friday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})


			//Récupération de la distance de course parcouru ce samedi
			await axios.get('http://localhost:3001/activities/sumrunsaturday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						saturday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce samedi
			await axios.get('http://localhost:3001/activities/sumbikesaturday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						saturday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce samedi
			await axios.get('http://localhost:3001/activities/sumswimsaturday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						saturday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})


			//Récupération de la distance de course parcouru ce dimanche 
			await axios.get('http://localhost:3001/activities/sumrunsunday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						sunday_run: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de vélo parcouru ce dimanche
			await axios.get('http://localhost:3001/activities/sumbikesunday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						sunday_bike: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
			//Récupération de la distance de natation parcouru ce dimanche
			await axios.get('http://localhost:3001/activities/sumswimsunday')
			.then(response => {
				if (response.data.length >0) {
					this.setState({
						sunday_swim: response.data[0].Distance
					})
				}
			}).catch( err => {
				console.log(err)
			})
		}
		catch (err){
			console.log(err)
		}
	}

	

	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

	AddNatation = () => 
    {
		if (this.state.natation === "")
		{
			this.setState(
				{
					natation : "natation"
				}
			);
		} 
		else {
			this.setState(
				{
					natation : ""
				}
			);
		}
	}
	
	AddVelo = () => 
    {
		if (this.state.velo === "")
		{
			this.setState(
				{
					velo : "velo"
				}
			);
		} 
		else {
			this.setState(
				{
					velo : ""
				}
			);
		}
	}
	
	AddCourse = () => 
    {
		if (this.state.course === "")
		{
			this.setState(
				{
					course : "course"
				}
			);
		} 
		else {
			this.setState(
				{
					course : ""
				}
			);
		}
    }
	
	render() {
		const data = [
			{
			  name: 'Lundi', velo: this.state.monday_bike, natation: this.state.monday_swim, course: this.state.monday_run,
			},
			{
			  name: 'Mardi', velo: this.state.tuesday_bike, natation: this.state.tuesday_swim, course: this.state.tuesday_run,
			},
			{
			  name: 'Mercredi', velo: this.state.wenesday_bike, natation: this.state.wenesday_swim, course: this.state.wenesday_run,
			},
			{
			  name: 'Jeudi', velo: this.state.thursday_bike, natation: this.state.thursday_swim, course: this.state.thursday_run,
			},
			{
			  name: 'Vendredi', velo: this.state.friday_bike, natation: this.state.friday_swim, course: this.friday_run,
			},
			{
			  name: 'Samedi', velo: this.state.saturday_bike, natation: this.state.saturday_swim, course: this.state.saturday_run,
			},
			{
			  name: 'Dimanche', velo: this.state.sunday_bike, natation: this.state.sunday_swim, course: this.state.sunday_run,
			},
		  ];
		  
		return (
			<div className="totDistanceBox">
				<Titre name={this.state.name}/>
				<ResponsiveContainer 
						width="90%"
						height={180}
				>
					<BarChart
						className="BarChart"
						data={data}
						margin={{
						top: 20, right: 5, left: 5, bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 4" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />

						<Bar dataKey={this.state.velo} fill="#E5A799" fillOpacity="0.74" />
						<Bar dataKey={this.state.natation} fill="#E57359" fillOpacity="0.74" />
						<Bar dataKey={this.state.course} fill="#E1411D" fillOpacity="0.74" />
					</BarChart>
				</ResponsiveContainer>
				<div className="Legende">
					<div className="Combo">
						<p className="Natation">Natation</p>
						<form action="#">
						<div class="switch">
							<input id="switch-1" type="checkbox" class="switch-input" onClick={this.AddNatation}/>
							<label for="switch-1" class="switch-label">Switch</label>
						</div>
						</form>
					</div>
					<div className="Combo">
						<p className="Velo">Vélo</p>
						<form action="#">
						<div class="switch">
							<input id="switch-2" type="checkbox" class="switch-input" onClick={this.AddVelo}/>
							<label for="switch-2" class="switch-label">Switch</label>
						</div>
						</form>
					</div>
					<div className="Combo">
						<p className="Natation">Course à Pied</p>
						<form action="#">
						<div class="switch">
							<input id="switch-3" type="checkbox" class="switch-input" onClick={this.AddCourse}/>
							<label for="switch-3" class="switch-label">Switch</label>
						</div>
						</form>
					</div>
				</div>
			</div>
		);
	  }

}
export default TotDistance;