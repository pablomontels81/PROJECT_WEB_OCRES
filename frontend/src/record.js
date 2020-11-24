import React from 'react';

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
		  distanceVelo1 : "20 Km",
		  tempsVelo1 : "31 min 10 sec",
		  distanceVelo2 : "40 Km",
		  tempsVelo2 : "1h 02min 35sec",
		  distanceCourse1 : "5 Km",
		  tempsCourse1 : "18min 45sec",
		  distanceCourse2 : "10 Km",
		  tempsCourse2 : "42min 35sec",
		  distanceNatation1 : "400 m",
		  tempsNatation1 : "16min 10 sec",
		  distanceNatation2 : "1 Km",
		  tempsNatation2 : "40min 0sec",
		};
	}

	render(){

		return (
			<div className="record">
				<Titre name={this.state.name}/>
				<div className="container-1">
					<div className="container-2">
						<p>
							<div className="distance-velo">{this.state.distanceVelo1}</div>
							<div className="temps">{this.state.tempsVelo1}</div>
						</p>
						<p>
							<div className="distance-course">{this.state.distanceCourse1}</div>
							<div className="temps">{this.state.tempsCourse1}</div>
						</p>
						<p>
							<div className="distance-natation">{this.state.distanceNatation1}</div>
							<div className="temps">{this.state.tempsNatation1}</div>
						</p>
						
					</div>
					<div className="container-2">
						<img className="image" src={velo}/>
						<img className="image" src={course}/>
						<img className="image" src={natation}/>
					</div>
					<div className="container-2">
						<p>
							<div className="distance-velo">{this.state.distanceVelo2}</div>
							<div className="temps">{this.state.tempsVelo2}</div>
						</p>
						<p>
							<div className="distance-course">{this.state.distanceCourse2}</div>
							<div className="temps">{this.state.tempsCourse2}</div>
						</p>
						<p>
							<div className="distance-natation">{this.state.distanceNatation2}</div>
							<div className="temps">{this.state.tempsNatation2}</div>
						</p>
					</div>
				</div>
			</div>
		);
	}


}
export default Record;