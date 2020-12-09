const express = require('express');
const router = express.Router();
let Activity = require('../modele/activity.model.js');
const activity =  require('../../database/activities.json');

/* GET activity listing. */
router.route('/').get((req,res) =>{
    Activity.find()
        .then(activity => res.json(activity))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* GET activityById listing. */
router.route('/_id').get((req,res) =>{
    Activity.findById(req.params.id)
        .then(activity => res.json(activity))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const ID_Activity = Number(req.body.ID_Activity);
    const ID_User = Number(req.body.ID_User);
    const Type = String(req.body.Type);
    const Lieu = String(req.body.Lieu);
    const Distance = Number(req.body.Distance);
    const Vitesse_Max = Number(req.body.Vitesse_Max);
    const Vitesse_Moy = Number(req.body.Vitesse_Moy);
    const Temps = Number(req.body.Temps);
    const Calories = Number(req.body.Calories);
    const Denivele = Number(req.body.Denivele);
    const Map = String(req.body.Map);
    const Date = Date(req.body.Date);

    const newActivity = new Goal({
        ID_Activity,
        ID_User,
        Type,
        Lieu,
        Distance,
        Vitesse_Max,
        Vitesse_Moy,
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