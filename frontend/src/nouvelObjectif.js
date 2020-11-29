import React from 'react';
import './nouvelObjectif.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class NouvelObjectif extends React.Component {

    render(){
        return (
            <div className="espace">
                <h3>Entrez un nouvel objectif</h3>
                <Container fluid >
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <div className="formulaire">
                                <p className="titre">Course</p>
                                <div className="cont1">
                                    <div className="cont2">
                                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree"/></p>
                                    </div>
                                    <div className="cont2">
                                        <p><input type="submit" name="objectifCourse" value="Modifer" className="button"/></p>
                                    </div>  
                                </div> 
                                <p className="titre">Vélo</p>
                                <div className="cont1">
                                    <div className="cont2">
                                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree"/></p>
                                    </div>
                                    <div className="cont2">
                                        <p><input type="submit" name="objectifVelo" value="Modifier" className="button"/></p>
                                    </div>  
                                </div>
                                <p className="titre">Natation</p>   
                                <div className="cont1">
                                    <div className="cont2">
                                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree"/></p>
                                    </div>
                                    <div className="cont2">
                                        <p><input type="submit" name="objectifNatation" value="Modifier" className="button"/></p>
                                    </div>                         
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default NouvelObjectif;