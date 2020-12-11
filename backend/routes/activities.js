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

/* GET les activités de la semaine (Widget Distance Total*/
router.get('/7week',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstdayoftheweek = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var lastdayoftheweek = new Date(firstdayoftheweek.getFullYear(), firstdayoftheweek.getMonth(), firstdayoftheweek.getDate()+6);
    console.log(firstdayoftheweek);
    Activity.find().where( { date: {$gte: firstdayoftheweek, $lte: lastdayoftheweek}})
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET somme des activités de course pour le mois présent (Widget Buts)*/
router.get('/sumrun',(req,res) => {
    var date = new Date();
    var firstday = new Date(date.getFullYear(), date.getMonth(),1);
    var lastday = new Date(date.getFullYear(), date.getMonth() +1, 0);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lte: lastday}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distances de natation sur la semaine d'avant (Widget Statut d'Entrainement)*/
router.get('/sumrunweek',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var last = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var first = new Date(last.getFullYear(), last.getMonth(), last.getDate()-6);
    console.log(first);
    console.log(last);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: first, $lte: last}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* GET somme des activités de velo pour le mois présent (Widget Buts)*/
router.get('/sumbike',(req,res) => {
    var date = new Date();
    var firstday = new Date(date.getFullYear(), date.getMonth(),1);
    var lastday = new Date(date.getFullYear(), date.getMonth() +1, 0);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lte: lastday}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* GET la somme des distances de natation sur la semaine d'avant (Widget Statut d'Entrainement)*/
router.get('/sumbikeweek',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var last = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var first = new Date(last.getFullYear(), last.getMonth(), last.getDate()-6);
    console.log(first);
    console.log(last);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: first, $lte: last}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* GET somme des activités de natation pour le mois présent (Widget Buts)*/
router.get('/sumswim',(req,res) => {
    var date = new Date();
    var firstday = new Date(date.getFullYear(), date.getMonth(),1);
    var lastday = new Date(date.getFullYear(), date.getMonth() +1, 0);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lte: lastday}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* GET la somme des distances de natation sur la semaine d'avant (Widget Statut d'Entrainement)*/
router.get('/sumswimweek',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var last = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var first = new Date(last.getFullYear(), last.getMonth(), last.getDate()-6);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: first, $lte: last}}
            ]
        }
            },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* GET Record Bike 20km(Widget Records Personnels) */
router.get('/20KBikeRecord', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'},
                { Distance: {$gte: 20}}
            ]
        }},
        {$sort: {Vitesse_moy: 1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})

/* GET Record Bike 40km(Widget Records Personnels) */
router.get('/40KBikeRecord', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'},
                { Distance: {$gte: 40}}
            ]
        }},
        {$sort: {Vitesse_moy: 1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})

/* GET Record Run 5km(Widget Records Personnels) */
router.get('/5KRunRecord', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'},
                { Distance: {$gte: 5}}
            ]
        }},
        {$sort: {Vitesse_moy: 1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})

/* GET Record Run 10km(Widget Records Personnels) */
router.get('/10KRunRecord', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'},
                { Distance: {$gte: 10}}
            ]
        }},
        {$sort: {Vitesse_moy: 1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})


/* GET Record Swim 400m(Widget Records Personnels) */
router.get('/400MSwimRecord', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'},
                { Distance: {$gte: 0.4}}
            ]
        }},
        {$sort: {Vitesse_moy: 1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})

/* GET Record Swim 1km(Widget Records Personnels) */
router.get('/400MSwimRecord', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'},
                { Distance: {$gte: 1}}
            ]
        }},
        {$sort: {Vitesse_moy: 1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})


/* POST ajout d'une activity (Widget Ajout Activité)*/
router.post('/add',(req, res) => {
    const ID_Activity = String(req.body.ID_Activity);
    const ID_User = String(req.body.ID_User);
    const Type = String(req.body.Type);
    const Lieu = String(req.body.Lieu);
    const Distance = String(req.body.Distance);
    const Vitesse_max = String(req.body.Vitesse_max);
    const Vitesse_moy = String(req.body.Vitesse_moy);
    const Temps = String(req.body.Temps);
    const Calories = String(req.body.Calories);
    const Denivele = String(req.body.Denivele);
    const Map = String(req.body.Map);
    const date = Date.parse(req.body.Date);

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
        date,
    });

    newActivity.save()
        .then(() => res.json('Activity added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;