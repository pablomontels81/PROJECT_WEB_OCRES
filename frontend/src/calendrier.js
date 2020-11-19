import React from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';

import './calendrier.css';
import Titre from './Titre';


class Calendrier extends React.Component {

	//Constructor 
	constructor(props){
		super(props);
		this.state = {
		name : "Calendrier",
		events : [
			{
				start: new Date(2020,11,19),
				end: new Date(2020,11,19),
				title: 'Vélo',
			},
		]
		};
	}

	render(){

		return (
			<div className ="calendrier">
				<Calendar
				className="calendar"
				events={this.state.events}
				/>
			</div>
		);
	}

}
export default Calendrier;