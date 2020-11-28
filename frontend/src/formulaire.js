import React from 'react';
import './formulaire.css';
import Resultats from './resultats';
import NouvelObjectif from './nouvelObjectif';
 
class Formulaire extends React.Component {

    render(){
        return (
            <div>
                <Resultats />
                <NouvelObjectif />
            </div>
         );
    }
}
 
export default Formulaire;