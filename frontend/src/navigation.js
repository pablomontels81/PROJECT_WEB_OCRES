import React from 'react';
import './navigation.css';
 
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    render(){
        return(
        <div className="Navbar">
          <h4><NavLink to="/" className="contour">&thinsp;Accueil&thinsp;</NavLink></h4>
          <h4><NavLink to="/formulaire" className="contour">&thinsp;Entrer un résultat&thinsp;</NavLink></h4>
       </div>
        );
    }

}
export default Navigation;