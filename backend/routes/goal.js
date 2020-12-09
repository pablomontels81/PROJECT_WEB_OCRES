const express = require('express');
const router = express.Router();
let Goal = require('../modele/goal.model.js');
const goal =  require('../../database/goal.json');

/* GET goal listing. */
router.route('/').get((req,res) =>{
    Goal.find()
        .then(goal => res.json(goal))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* GET goalById listing. */
router.route('/_id').get((req,res) =>{
    Goal.findById(req.params.id)
        .then(goal => res.json(goal))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const velo_goal = Number(req.body.velo_goal);
    const natation_goal = Number(req.body.natation_goal);
    const course_goal = Number(req.body.course_goal);

    const newGoal = new Goal({
        velo_goal,
        natation_goal,
        course_goal,
    });

    newGoal.save()
        .then(() => res.json('Goal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;