import React from 'react';

import './record.css';
import Titre from './Titre';

class Record extends React.Component {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Record Personnel"
		};
	}

	render(){

		return (
			<div className="record">
				<Titre name={this.state.name}/>
			</div>
		);
	}


}
export default Record;