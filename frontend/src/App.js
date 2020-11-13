import React from 'react';
import logo from './logo.svg';
import './App.css';
import calendrier from './calendrier';
import evenements from './evenements';
import record from './record';
import goals from './goals';
import totDistance from './totDistance';
import statutEntrainement from './statutEntrainement';
import derniereActivite from './derniereActivite';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>

      
      
        <Container>   

          <Row> 

            <Col lg={4}>ok</Col>

            <Col lg={8}>bv</Col>

          </Row>

        </Container>
        


      </main>
    </div>
  );
}

export default App;