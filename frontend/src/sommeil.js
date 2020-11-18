import React from 'react';

import './sommeil.css';
import Titre from './Titre';
import lune from './image/lune.png';

class Sommeil extends React.Component {

	//Constructor 
	constructor(props) {
		super(props);
		this.state = {
		  name : "Analyse Sommeil",
		  profond : "1:07",
		  reveille : "0:04",
		  leger : "5:13",
		  rem : "2:14",
		  total : "8:34"
		};
	}

	render(){
		return (
			<div className ="sommeil">
				<Titre name={this.state.name}/>
				<div className="container1">
					<div className="container2">
						<p className="profond">Profond</p>
						<p className="result">{this.state.profond}</p>
						<p className="reveille">Réveille</p>
						<p className="result">{this.state.reveille}</p>
					</div>
					<div>
						<img className="image" src={lune}/>
						<p className="result">{this.state.total}</p>
					</div>
					<div className="container2">
						<p className="leger">Léger</p>
						<p className="result">{this.state.leger}</p>
						<p className="rem">REM</p>
						<p className="result">{this.state.rem}</p>
					</div>
				</div>
			</div>

		);
	}


}
export default Sommeil;