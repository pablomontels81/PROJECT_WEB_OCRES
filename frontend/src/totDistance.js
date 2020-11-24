import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';


import './totDistance.css';
import Titre from './Titre';

const data = [
	{
	  name: 'Lundi', velo: 4000, natation: 2400, course: 2400,
	},
	{
	  name: 'Mardi', velo: 3000, natation: 1398, course: 2210,
	},
	{
	  name: 'Mercredi', velo: 2000, natation: 9800, course: 2290,
	},
	{
	  name: 'Jeudi', velo: 2780, natation: 3908, course: 2000,
	},
	{
	  name: 'Vendredi', velo: 1890, natation: 4800, course: 2181,
	},
	{
	  name: 'Samedi', velo: 2390, natation: 3800, course: 2500,
	},
	{
	  name: 'Dimanche', velo: 3490, natation: 4300, course: 2100,
	},
  ];



class TotDistance extends React.PureComponent {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Distance Totale",
		  velo : "",
		  course : "",
		  natation : ""};
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