import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Formulaire from './formulaire';
import Navigation from './navigation';

function App() {

  return (

    <div className="App">
      <header className="App-header">
          <p>
             www.DashBoard_MONTELS_BONNET.com
          </p>
      </header>

        <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/formulaire" component={Formulaire}/>
           </Switch>
        </div> 
      </BrowserRouter>

      <footer>
      <p className="footer">&copy; 2020 Copyright DashBoard | Droit d'auteur: Pablo MONTELS & Baptiste BONNET</p>
      </footer>

    </div>
    
  );
}
export default App;