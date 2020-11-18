import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import './totDistance.css';
import Titre from './Titre';

const data = [
	{
	  name: 'L', velo: 4000, natation: 2400, course: 2400,
	},
	{
	  name: 'Ma', velo: 3000, natation: 1398, course: 2210,
	},
	{
	  name: 'Me', velo: 2000, natation: 9800, course: 2290,
	},
	{
	  name: 'J', velo: 2780, natation: 3908, course: 2000,
	},
	{
	  name: 'V', velo: 1890, natation: 4800, course: 2181,
	},
	{
	  name: 'S', velo: 2390, natation: 3800, course: 2500,
	},
	{
	  name: 'D', velo: 3490, natation: 4300, course: 2100,
	},
  ];



class TotDistance extends React.PureComponent {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Total Distance"};
	}

	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

	render() {
		return (
			<div className="totDistanceBox">
				<Titre name={this.state.name}/>
				<BarChart
					className="BarChart"
					width={350}
					height={180}
					data={data}
					margin={{
					top: 20, right: 5, left: 5, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 4" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="velo" fill="#E5A799" fillOpacity="0.74" />
					<Bar dataKey="natation" fill="#E57359" fillOpacity="0.74" />
					<Bar dataKey="course" fill="#E1411D" fillOpacity="0.74" />
				</BarChart>
				<div className="Legende">
					<p className="Natation">Natation</p>
					<p className="Velo">Vélo</p>
					<p className="CourseaPied">Course à Pied</p>
				</div>
			</div>
		);
	  }

}
export default TotDistance;