import React from 'react';
import logo from './logo.svg';
import './App.css';
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


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
           www.DashBoard_MONTELS_BONNET.com
        </p>
      </header>

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
      <footer>
        <p className="footer">&copy; 2020 Copyright DashBoard | Droit d'auteur: Pablo MONTELS & Baptiste BONNET</p>
      </footer>
    </div>
  );
}

export default App;