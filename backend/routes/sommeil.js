const express = require('express');
const router = express.Router();
let Sommeil = require('../modele/sommeil.model.js');
const sommeil =  require('../../database/sommeil.json');

/* GET sommeil listing. */
router.route('/').get((req,res) =>{
    Sommeil.find()
        .then(sommeil => res.json(sommeil))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* GET sommeilById listing. */
router.route('/_id').get((req,res) =>{
    Sommeil.findById(req.params.id)
        .then(sommeil => res.json(sommeil))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const horaire_debut = Number(req.body.horaire_debut);
    const horaire_fin = Number(req.body.horaire_fin);

    const newSommeil = new Goal({
      horaire_debut,
        horaire_fin,
    });

    newSommeil.save()
        .then(() => res.json('Sommeil added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;