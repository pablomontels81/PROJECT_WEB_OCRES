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

/* GET la somme des distance de course pour le lundi (Widget TotDistance)*/
router.get('/sumrunmonday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+1);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le lundi (Widget TotDistance)*/
router.get('/sumbikemonday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+1);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le lundi (Widget TotDistance)*/
router.get('/sumswimmonday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+1);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de course pour le mardi (Widget TotDistance)*/
router.get('/sumruntuesday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+1);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+2);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le mardi (Widget TotDistance)*/
router.get('/sumbiketuesday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+1);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+2);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le mardi (Widget TotDistance)*/
router.get('/sumswimtuesday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+1);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+2);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de course pour le mercredi (Widget TotDistance)*/
router.get('/sumrunwednesday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+2);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+3);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le mercredi (Widget TotDistance)*/
router.get('/sumbikewednesday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+2);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+3);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le mercredi (Widget TotDistance)*/
router.get('/sumswimwednesday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+2);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+3);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de course pour le jeudi (Widget TotDistance)*/
router.get('/sumrunthursday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+3);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+4);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le jeudi (Widget TotDistance)*/
router.get('/sumbikethursday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+3);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+4);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le jeudi (Widget TotDistance)*/
router.get('/sumswimthursday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+3);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+4);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de course pour le vendredi (Widget TotDistance)*/
router.get('/sumrunfriday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+4);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+5);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le vendredi (Widget TotDistance)*/
router.get('/sumbikefriday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+4);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+5);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le vendredi (Widget TotDistance)*/
router.get('/sumswimfriday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+4);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+5);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de course pour le samedi (Widget TotDistance)*/
router.get('/sumrunsaturday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+5);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+6);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le samedi (Widget TotDistance)*/
router.get('/sumbikesaturday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+5);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+6);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le samedi (Widget TotDistance)*/
router.get('/sumswimsaturday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+5);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+6);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de course pour le dimanche (Widget TotDistance)*/
router.get('/sumrunsunday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+6);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+7);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'course'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de velo pour le dimanche (Widget TotDistance)*/
router.get('/sumbikesunday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+6);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+7);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'velo'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

/* GET la somme des distance de natation pour le dimanche (Widget TotDistance)*/
router.get('/sumswimsunday',(req,res) => {
    var date = new Date();
    var offset = (date.getDay()+6)%7;
    var firstday = new Date(date.getFullYear(), date.getMonth(), date.getDate()-offset+6);
    var lastday = new Date(firstday.getFullYear(), firstday.getMonth(), firstday.getDate()+7);
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'}, 
                { date: {$gte: firstday, $lt: lastday}}
            ]
        }
        },
        {$group: {_id: null, Distance: { $sum: "$Distance"}}},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err)); 
});



/* GET la somme des activités de course pour le mois présent (Widget Buts)*/
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

/* GET la somme des activités de velo pour le mois présent (Widget Buts)*/
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
        {$sort: {Vitesse_moy: -1}},
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
        {$sort: {Vitesse_moy: -1}},
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
        {$sort: {Vitesse_moy: -1}},
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
        {$sort: {Vitesse_moy: -1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})


/* GET Record Swim 400m(Widget Records Personnels) */
router.get('/SwimRecord1', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'},
                { Distance: {$gte: 0.4}}
            ]
        }},
        {$sort: {Vitesse_moy: -1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})

/* GET Record Swim 1km(Widget Records Personnels) */
router.get('/SwimRecord2', (req,res) => {
    Activity.aggregate([
        {$match: {
            $and : [
                { Type: 'natation'},
                { Distance: {$gte: 1}}
            ]
        }},
        {$sort: {Vitesse_moy: -1}},
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
    const date = Date.parse(req.body.date);

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