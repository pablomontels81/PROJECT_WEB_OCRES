import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
		  natation : ""};
	}

	render(){
		return (
			<div className="totDistanceBox">
				<Titre name={this.state.name}/>

				<Container fluid>   

          			<Row>

          			<Col lg={4} md={4} sm={4}>
          				<div className="centre">
          					<img src={course}/>
          				</div>
          				<div className="centre">
	          				<div className="cercle couleur-course ecriture">
	          					<div className="ecriture">ok</div>
	          				</div>
          				</div>
          			</Col>

          			<Col lg={4} md={4} sm={4}>
          				<div className="centre">
          					<img src={velo}/>
          				</div>
          				<div className="centre">
	          				<div className="cercle couleur-velo ecriture">
	          					<div className="ecriture">ok</div>
	          				</div>
          				</div>
          			</Col>

          			<Col lg={4} md={4} sm={4}>
          				<div className="centre">
          					<img src={natation}/>
          				</div>
          				<div className="centre">
	          				<div className="cercle couleur-natation ecriture">
	          					<div className="ecriture">ok</div>
	          				</div>
          				</div>
          			</Col>

          			</Row>

          		</Container>

			</div>
		);
	}


}
export default Goals;