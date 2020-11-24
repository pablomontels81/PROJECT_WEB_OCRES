import React from 'react';

import './derniereActivite.css';
import Titre from './Titre';

import course from './image/course.png';
import velo from './image/velo.png';
import natation from './image/natation.png';

class DerniereActivite extends React.Component {

	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Dernière Activitée",
		location : "Âraches-La-Frasse",
		name_activite : "natation",
		distance : "1.1",
		allure : "5:05",
		allure_max : "3:55",
		temps : "5:11",
		calories : "40",
		denivele_positif : "120",
		};
	}


	render(){
		if (this.state.name_activite === "velo")
		{
			return (
				<div className ="derniereactivitee">
					<Titre name={this.state.name}/>
					<div className="Container">
						<img src={velo}/>
						<h3 className="Title">{this.state.location}</h3>
					</div>
					<div className="Container">
						<p>Distance</p>
						<p>Allure</p>
						<p>Allure Max</p>
					</div>
					<div className="Container">
						<p>{this.state.distance} km</p>
						<p>{this.state.allure} km/h</p>
						<p>{this.state.allure_max} km/h</p>
					</div>
					<div className="Container Def">
						<p>Temps</p>
						<p>Calories</p>
						<p>Dénivelé Positif</p>
					</div>
					<div className="Container">
						<p>{this.state.temps}</p>
						<p>{this.state.calories}</p>
						<p>{this.state.denivele_positif} m</p>
					</div>
				</div>
			);
		}
		else if (this.state.name_activite === "natation")
		{
			return (
				<div className ="derniereactivitee">
					<Titre name={this.state.name}/>
					<div className="Container">
						<img src={natation}/>
						<h3 className="Title">{this.state.location}</h3>
					</div>
					<div className="Container">
						<p>Distance</p>
						<p>Allure</p>
						<p>Allure Max</p>
					</div>
					<div className="Container">
						<p>{this.state.distance} km</p>
						<p>{this.state.allure} km/h</p>
						<p>{this.state.allure_max} km/h</p>
					</div>
					<div className="Container Def">
						<p>Temps</p>
						<p>Calories</p>
					</div>
					<div className="Container">
						<p>{this.state.temps}</p>
						<p>{this.state.calories}</p>
					</div>
				</div>
			);
		}	
		else if (this.state.name_activite === "course")
		{
			return (
				<div className ="derniereactivitee">
					<Titre name={this.state.name}/>
					<div className="Container">
						<img src={course}/>
						<h3 className="Title">{this.state.location}</h3>
					</div>
					<div className="Container">
						<p>Distance</p>
						<p>Allure</p>
						<p>Allure Max</p>
					</div>
					<div className="Container">
						<p>{this.state.distance} km</p>
						<p>{this.state.allure} km/h</p>
						<p>{this.state.allure_max} km/h</p>
					</div>
					<div className="Container Def">
						<p>Temps</p>
						<p>Calories</p>
						<p>Dénivelé Positif</p>
					</div>
					<div className="Container">
						<p>{this.state.temps}</p>
						<p>{this.state.calories}</p>
						<p>{this.state.denivele_positif} m</p>
					</div>
				</div>
			);
		}		
	}
}

export default DerniereActivite;