import React from 'react';
import './home.css';
import Calendrier from './calendrier';
import Sommeil from './sommeil';
import Record from './record';
import Goals from './goals';
import TotDistance from './totDistance';
import StatutEntrainement from './statutEntrainement';
import DerniereActivite from './derniereActivite';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {

    render(){
        return (
            <div className="Home">
              <main>
                
                <Container fluid >  
                <Row className="Container1">
                    <Col lg={4} md={4} sm={4}>
                      <DerniereActivite />
                      <Record />
                    </Col>
                    <Col lg={8} md={8} sm={8}>
                      <TotDistance/>
                      <Goals />
                      <Row>
                        <Col lg={6} md={6} sm={6}>
                          <StatutEntrainement />
                        </Col>
                          <Col lg={6} md={6} sm={6}>
                          <Sommeil />
                        </Col>
                      </Row>
        
                    </Col>
                </Row> 
                </Container>
               
              </main>
            </div>
          );
    }

}

export default Home;