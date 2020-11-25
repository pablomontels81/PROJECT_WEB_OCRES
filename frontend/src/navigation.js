import React from 'react';
import './navigation.css';
 
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    render(){
        return(
        <div className="Navbar">
          <h3><NavLink to="/" className="contour">&thinsp;Accueil&thinsp;</NavLink></h3>
          <h3><NavLink to="/formulaire" className="contour">&thinsp;Entrer un résultat&thinsp;</NavLink></h3>
       </div>
        );
    }

}
export default Navigation;