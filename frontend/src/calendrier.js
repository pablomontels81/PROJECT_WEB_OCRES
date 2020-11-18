import React from 'react';

import './calendrier.css';
import Titre from './Titre';


class Calendrier extends React.Component {

	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Calendrier"
		};
	}

	render(){

		return (
			<div className ="calendrier">
				<Titre name={this.state.name}/>
			</div>
		);
	}

}
export default Calendrier;