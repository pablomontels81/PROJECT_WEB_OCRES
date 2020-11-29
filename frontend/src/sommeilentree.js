import React from 'react';
import './sommeilentree.css';

class SommeilEntree extends React.Component {
    render() {
        return(
            <div>
                <h3>Entrez vos horaires de Sommeil</h3>
                <div className="Sommeil1 formulaire">
                    <p className="titre">Sommeil</p>
                    <div className="Sommeil2">
                        <p className="titre">Heure de début:</p>
                        <p className="titre">Heure de fin:</p>
                    </div>
                    <div className="Sommeil2">
                        <p><input type="text" className="Input2" name="heuredebut" className="entree" /></p>
                        <p><input type="text" className="Input2" name="heurefin" className="entree" /></p>
                    </div>
                    <input type="submit" className="submit" value="Enregistrer les horaires de sommeil" className="buttonsommeil"/>
                </div>
            </div>
        );
    }
}

export default SommeilEntree;