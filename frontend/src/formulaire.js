import React from 'react';
import './formulaire.css';
import Resultats from './resultats';
import NouvelObjectif from './nouvelObjectif';
import SommeilEntree from './sommeilentree';
 
class Formulaire extends React.Component {

    render(){
        return (
            <div>
                <Resultats />
                <NouvelObjectif />
                <SommeilEntree />
            </div>
         );
    }
}
 
export default Formulaire;