const express = require('express');
const router = express.Router();
let Sommeil = require('../modele/sommeil.model.js');

/* GET sommeil listing. */
router.get('/',(req,res) =>{
    Sommeil.find()
        .then(sommeil => res.json(sommeil))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* GET last sommeil (Widget Analyse Sommeil)*/
router.get('/lastsleep',(req,res) =>{
    Sommeil.findOne({}).sort({$natural: -1}).limit(1)
        .then(sommeil => res.json(sommeil))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',(req, res) => {
    const horaire_debut = req.body.horaire_debut;
    const horaire_fin = req.body.horaire_fin;
    const date = Date.parse(req.body.date);

    const newSommeil = new Sommeil({
        horaire_debut,
        horaire_fin,
        date,
    });

    newSommeil.save()
        .then(() => res.json('Sommeil ajouté!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;