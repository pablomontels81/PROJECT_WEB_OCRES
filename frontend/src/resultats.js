import React from 'react';
import './resultats.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class Resultats extends React.Component {

    render(){
        return (
            <div>
                <h3>Entrez vos résutats d'entraînement</h3>
                <Container fluid >  
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <div className="formulaire">
                                <p className="titre">Activité</p>
                                <div className="Cont1">
                                    <div className="Cont2">
                                        <p>Course</p>
                                        <p><input type="radio" name="sport" value="course" /></p>
                                    </div>
                                    <div className="Cont2">
                                        <p>Vélo</p>
                                        <p><input type="radio" name="sport" value="velo" /></p>
                                    </div>
                                    <div className="Cont2">
                                        <p>Natation</p>
                                        <p><input type="radio" name="sport" value="natation" /></p>
                                    </div>
                                </div>
                                
                                <p className="titre">Lieu :&nbsp;<input type="text" className="Input1" name="lieu" className="entree"/></p>
                                  
                                <div className="Cont1">
                                    <div className="Cont2">
                                        <p className="titre">Distance parcourue:</p>
                                        <p className="titre">Vitesse moyenne:</p>
                                    </div>
                                    <div className="Cont2">
                                        <p><input type="text" className="Input2" name="distance" className="entree"/></p>
                                        <p><input type="text" className="Input2" name="vitmoy" className="entree"/></p>
                                    </div>
                                    <div className="Cont2">
                                        <p className="titre">Temps:</p>
                                        <p className="titre">Vitesse maximale:</p>
                                    </div>
                                    <div className="Cont2">
                                        <input type="text" className="Input2" name="time" className="entree"/>
                                        <input type="text" className="Input2" name="vitmax" className="entree"/>
                                    </div>
                                </div>
                                <p className="titre">Dénivelé:&nbsp;<input type="text" className="Input1" name="denivele" className="entree"/></p>
                                <p className="titre">Calories:&nbsp;<input type="text" className="Input1" name="calories" className="entree"/></p>
                                <p className="titre">Itinéraire/Map:&nbsp;<input type="text" className="Input1" name="map" className="entree"/></p>
                                <p className="explication">Afin de pouvoir afficher cette map, veuillez récupérer le .gpx de votre activité puis de suivre les étapes de <a href="https://www.papergeek.fr/fichier-gpx-comment-ouvrir-319293">ce lien</a>.
                                   Ensuite, veuillez récupérer via l'outil Google Map: Partager/Intégrer la Map le code de votre Map et nous le fournir !
                                </p>
                                <input type="submit" className="submit" value="Enregistrer l'activité" className="button"/>
                                
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </div>    
         );
    }
}
 
export default Resultats;
