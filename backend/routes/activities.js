const express = require('express');
const router = express.Router();
let Activity = require('../modele/activities.model.js');

/* GET activity listing. */
router.get('/',(req,res) =>{
    Activity.find()
        .then(activities => res.json(activities))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* GET last activity */
router.get('/lastact',(req,res) =>{
    Activity.findOne({}).sort({ID_Activity: -1}).limit(1)
        .then(activities => res.json(activities))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* GET somme des activités de course pour le mois présent*/
router.get('/sumrun',(req,res) => {
    var date = new Date();
    var firstday = new Date(date.getFullYear(), date.getMonth(),1);
    var lastday = new Date(date.getFullYear(), date.getMonth() +1, 0);
    console.log(firstday);
    console.log(lastday);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { Date: {$gte: firstday, $lte: lastday}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET somme des activités de velo pour le mois présent*/
router.get('/sumbike',(req,res) => {
    Activity.aggregate([
        {$match: { Type: 'velo'}},
        {$group: {_id: null, Distance: { $sum: "$Distance"}}}
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* GET somme des activités de natation pour le mois présent*/
router.get('/sumswim',(req,res) => {
    Activity.aggregate([
        {$match: { Type: 'natation'}},
        {$group: {_id: null, Distance: { $sum: "$Distance"}}}
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* POST ajout d'une activity*/
router.post('/add',(req, res) => {
    const ID_Activity = String(req.body.ID_Activity);
    const ID_User = String(req.body.ID_User);
    const Type = String(req.body.Type);
    const Lieu = String(req.body.Lieu);
    const Distance = String(req.body.Distance);
    const Vitesse_max = String(req.body.Vitesse_Max);
    const Vitesse_moy = String(req.body.Vitesse_Moy);
    const Temps = String(req.body.Temps);
    const Calories = String(req.body.Calories);
    const Denivele = String(req.body.Denivele);
    const Map = String(req.body.Map);
    const Date = Date.parse(req.body.Date);

    const newActivity = new Activity({
        ID_Activity,
        ID_User,
        Type,
        Lieu,
        Distance,
        Vitesse_max,
        Vitesse_moy,
        Temps,
        Calories,
        Denivele,
        Map,
        Date,
    });

    newActivity.save()
        .then(() => res.json('Activity added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;