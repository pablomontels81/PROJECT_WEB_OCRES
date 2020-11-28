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
                                
                                <p className="titre">Lieu :&nbsp;<input type="text" className="Input1" name="lieu" /></p>
                                  
                                <div className="Cont1">
                                    <div className="Cont2">
                                        <p className="titre">Distance parcourue:</p>
                                        <p className="titre">Vitesse moyenne:</p>
                                    </div>
                                    <div className="Cont2">
                                        <p><input type="text" className="Input2" name="distance" /></p>
                                        <p><input type="text" className="Input2" name="vitmoy" /></p>
                                    </div>
                                    <div className="Cont2">
                                        <p className="titre">Temps:</p>
                                        <p className="titre">Vitesse maximale:</p>
                                    </div>
                                    <div className="Cont2">
                                        <input type="text" className="Input2" name="vitmoy" />
                                        <input type="text" className="Input2" name="vitmax" />
                                    </div>
                                </div>

                                <p className="titre">Dénivelé:&nbsp;<input type="text" className="Input1" name="denivele" /></p>
                                <p className="titre">Calories:&nbsp;<input type="text" className="Input1" name="calories" /></p>
                                <p className="titre">Sommeil</p>
                                

                                <div className="Cont1">
                                    <div className="Cont2">
                                        <p className="titre">Heure de début:</p>
                                    </div>
                                    <div className="Cont2">
                                        <p><input type="text" className="Input2" name="heuredebut" /></p>
                                    </div>
                                    <div className="Cont2">
                                        <p className="titre">Heure de fin:</p>
                                    </div>
                                    <div className="Cont2">
                                        <p><input type="text" className="Input2" name="heurefin" /></p>
                                    </div>
                                </div>
                                    
                                <input type="submit" className="submit" value="Envoyer" />
                                
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
