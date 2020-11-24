import React from 'react';

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
		  velo : "60",
		  course : "40",
		  natation : "35"};
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