import React from 'react';
import './resultats.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
class Resultats extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLieu = this.onChangeLieu.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeVitesse_max = this.onChangeVitesse_max.bind(this);
        this.onChangeVitesse_moy = this.onChangeVitesse_moy.bind(this);
        this.onChangeTemps = this.onChangeTemps.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeDenivele = this.onChangeDenivele.bind(this);
        this.onChangeMap = this.onChangeMap.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Type: '',
            Lieu: '',
            Distance: '',
            Vitesse_max: '',
            Vitesse_moy: '',
            Temps: '',
            Calories: '',
            Denivele: '',
            Map: '',
            Date: new Date(),
        }
    }

    onChangeType(e) {
        this.setState({
            Type: e.target.value
        });
    }

    onChangeLieu(e) {
        this.setState({
            Lieu: e.target.value
        });
    }

    onChangeDistance(e) {
        this.setState({
            Distance: e.target.value
        });
    }

    onChangeVitesse_max(e) {
        this.setState({
            Vitesse_max: e.target.value
        });
    }

    onChangeVitesse_moy(e) {
        this.setState({
            Vitesse_moy: e.target.value
        });
    }

    onChangeTemps(e) {
        this.setState({
            Temps: e.target.value
        });
    }

    onChangeCalories(e) {
        this.setState({
            Calories: e.target.value
        });
    }

    onChangeDenivele(e) {
        this.setState({
            Denivele: e.target.value
        });
    }

    onChangeMap(e) {
        this.setState({
            Map: e.target.value
        });
    }

    onChangeDate(Date) {
        this.setState({
            Date: Date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const resultats = {
            Type: this.state.Type,
            Lieu: this.state.Lieu,
            Distance: this.state.Distance,
            Vitesse_max: this.state.Vitesse_max,
            Vitesse_moy: this.state.Vitesse_moy,
            Temps: this.state.Temps,
            Calories: this.state.Calories,
            Denivele: this.state.Denivele,
            Map: this.state.Map,
            date: this.state.date
        }

        console.log(resultats);

        window.location = "/formulaire";
    }

    render(){
        return (
            <div>
                <h3>Entrez vos résutats d'entraînement</h3>
                <Container fluid >  
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                        <form onSubmit={this.onSubmit}>
                            <div className="formulaire">
                                <p className="titre">Activité</p>
                                <div className="Cont1">
                                    <div className="Cont2">
                                        <p>Course</p>
                                        <p><input type="radio" name="sport" value="course" onChange={this.onChangeType}/></p>
                                    </div>
                                    <div className="Cont2">
                                        <p>Vélo</p>
                                        <p><input type="radio" name="sport" value="velo" onChange={this.onChangeType}/></p>
                                    </div>
                                    <div className="Cont2">
                                        <p>Natation</p>
                                        <p><input type="radio" name="sport" value="natation" onChange={this.onChangeType}/></p>
                                    </div>
                                </div>

                                <p className="titre">Date :&emsp;&emsp;<DatePicker selected={this.state.Date} onChange={this.onChangeDate} /></p>
                                
                                <p className="titre">Lieu :&nbsp;<input type="text" className="Input1" name="lieu" className="entree" value={this.state.Lieu} onChange={this.onChangeLieu}/></p>
                                  
                                <div className="Cont1">
                                    <div className="Cont2">
                                        <p className="titre">Distance parcourue:</p>
                                        <p className="titre">Vitesse moyenne:</p>
                                    </div>
                                    <div className="Cont2">
                                        <p><input type="text" className="Input2" name="distance" className="entree" value={this.state.Distance} onChange={this.onChangeDistance}/></p>
                                        <p><input type="text" className="Input2" name="vitmoy" className="entree" value={this.state.Vitesse_moy} onChange={this.onChangeVitesse_moy}/></p>
                                    </div>
                                    <div className="Cont2">
                                        <p className="titre">Temps:</p>
                                        <p className="titre">Vitesse maximale:</p>
                                    </div>
                                    <div className="Cont2">
                                        <input type="text" className="Input2" name="time" className="entree" value={this.state.Temps} onChange={this.onChangeTemps}/>
                                        <input type="text" className="Input2" name="vitmax" className="entree" value={this.state.Vitesse_max} onChange={this.onChangeVitesse_max}/>
                                    </div>
                                </div>
                                <p className="titre">Dénivelé:&nbsp;<input type="text" className="Input1" name="denivele" className="entree" value={this.state.Denivele} onChange={this.onChangeDenivele}/></p>
                                <p className="titre">Calories:&nbsp;<input type="text" className="Input1" name="calories" className="entree" value={this.state.Calories} onChange={this.onChangeCalories}/></p>
                                <p className="titre">Itinéraire/Map:&nbsp;<input type="text" className="Input1" name="map" className="entree" value={this.state.Map} onChange={this.onChangeMap}/></p>
                                <p className="explication">Afin de pouvoir afficher cette map, veuillez récupérer le .gpx de votre activité puis de suivre les étapes de <a href="https://www.papergeek.fr/fichier-gpx-comment-ouvrir-319293">ce lien</a>.
                                   Ensuite, veuillez récupérer via l'outil Google Map: Partager/Intégrer la Map le code de votre Map et nous le fournir !
                                </p>
                                <input type="submit" className="submit" value="Enregistrer l'activité" className="button"/>
                                
                            </div>
                        </form>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </div>    
         );
    }
}
 
export default Resultats;
