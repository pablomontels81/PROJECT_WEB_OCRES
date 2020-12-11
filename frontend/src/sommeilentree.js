import React from 'react';
import './sommeilentree.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class SommeilEntree extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeHoraire_debut = this.onChangeHoraire_debut.bind(this);
        this.onChangeHoraire_fin = this.onChangeHoraire_fin.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            horaire_debut: '',
            horaire_fin: '',
            date: new Date(),
        }
    }

    onChangeHoraire_debut(e) {
        this.setState({
            horaire_debut: e.target.value
        });
    }

    onChangeHoraire_fin(e) {
        this.setState({
            horaire_fin: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const sommeilEntree = {
            horaire_debut: this.state.horaire_debut,
            horaire_fin: this.state.horaire_fin,
            date: this.state.date
        }

        axios.post('http://localhost:3001/sommeils/add', sommeilEntree)
            .then(res => console.log(res.data));

        window.location = "/formulaire";
    }

    render() {
        return(
            <div>
                <h3>Entrez vos horaires de Sommeil</h3>
                <form onSubmit={this.onSubmit}>
                <div className="Sommeil1 formulaire">
                    <p className="titre">Sommeil</p>
                    <div className="Sommeil2">
                        <p className="titre">Heure de début:</p>
                        <p className="titre">Date:</p>
                        <p className="titre">Heure de fin:</p>
                    </div>
                    <div className="Sommeil2">
                        <p><input type="text" className="Input2" name="heuredebut" className="entree" value={this.state.horaire_debut} onChange={this.onChangeHoraire_debut}/></p>
                        <p className="titre"><DatePicker selected={this.state.date} onChange={this.onChangeDate}/></p>
                        <p><input type="text" className="Input2" name="heurefin" className="entree" value={this.state.horaire_fin} onChange={this.onChangeHoraire_fin}/></p>
                    </div>
                    <input type="submit" className="submit" value="Enregistrer les horaires de sommeil" className="buttonsommeil"/>
                </div>
                </form>
            </div>
        );
    }
}

export default SommeilEntree;