import React from 'react';
import axios from 'axios';

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
		map : "https://www.google.com/maps/d/u/0/embed?mid=17dB14CBeEUoFPB60kdz9K4jnrJzULQTg",
		};
	}

	componentDidMount() {
        axios.get('http://localhost:3001/activities/lastact')
            .then(response =>{
                const temp1 = response.data.Lieu;
				this.setState({location: temp1});
				const temp2 = response.data.Type;
				this.setState({name_activite: temp2});
				const temp3 = response.data.Distance;
				this.setState({distance: temp3});
				const temp4 = response.data.Vitesse_moy;
				this.setState({allure: temp4});
				const temp5 = response.data.Vitesse_max;
				this.setState({allure_max: temp5});
				const temp6 = response.data.Temps;
				this.setState({temps: temp6});
				const temp7 = response.data.Calories;
				this.setState({calories: temp7});
				const temp8 = response.data.Denivele;
				this.setState({denivele_positif: temp8});
				const temp9 = response.data.Map;
				this.setState({map: temp9});
			})
			.catch( err => {
				console.log(err)
			});
    }


	render(){
		if (this.state.name_activite === "velo")
		{
			return (
				<div className ="derniereactivitee">
					<Titre name={this.state.name}/>
					<div className="Container">
						<img src={velo} className="icone"/>
						<h3 className="Title">{this.state.location}</h3>
					</div>
					<div className="Container Def">
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
					<iframe 
					src={this.state.map}
					className="map"></iframe>
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
					<div className="Container Def">
						<p>Distance</p>
						<p>Allure</p>
						<p>Allure Max</p>
					</div>
					<div className="Container">
						<p>{this.state.distance} km</p>
						<p>{this.state.allure} m/h</p>
						<p>{this.state.allure_max} m/h</p>
					</div>
					<div className="Container Def">
						<p>Temps</p>
						<p>Calories</p>
					</div>
					<div className="Container">
						<p>{this.state.temps}</p>
						<p>{this.state.calories}</p>
					</div>
					<div className="divmap">
						<iframe 
					src={this.state.map}
					className="map"></iframe>
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
					<div className="Container Def">
						<p>Distance</p>
						<p>Allure</p>
						<p>Allure Max</p>
					</div>
					<div className="Container">
						<p>{this.state.distance} km</p>
						<p>{this.state.allure} min/km</p>
						<p>{this.state.allure_max} min/km</p>
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
					<iframe 
					src={this.state.map}
					className="map"></iframe>
				</div>
			);
		}		
	}
}

export default DerniereActivite;