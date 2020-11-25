import React from 'react';
import './navigation.css';
 
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    render(){
        return(
            <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/formulaire">Formulaire</NavLink>
       </div>
        );
    }

}
export default Navigation;