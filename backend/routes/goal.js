const express = require('express');
const router = express.Router();
let Goal = require('../modele/goal.model.js');

/* GET goal listing. */
router.get('/',(req,res) =>{
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

/* POST update des goals (Widget Update Goal)*/
router.post('/update/:id', (req, res) =>{
    Goal.findById(req.params.id)
    .then(goal => {
        goal.velo_goal = req.body.velo_goal;
        goal.natation_goal = req.body.natation_goal;
        goal.course_goal = req.body.course_goal;

        goal.save()
            .then(() => res.json('Goal updated !'))
            .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
})

router.post('/add',(req, res) => {
    const velo_goal = String(req.body.velo_goal);
    const natation_goal = String(req.body.natation_goal);
    const course_goal = String(req.body.course_goal);

    const newGoal = new Goal({
        velo_goal,
        natation_goal,
        course_goal,
    });

    /* POST update du goal natation (Widget Update Goal)*/
router.post('/update_natation', (req, res) =>{
    const filter = {_id : "5fd21280bca1f33ea277a864"};
    const update = {natation_goal : req.body.natation_goal};
    Goal.findOneAndUpdate(filter,update)
        .then(() => res.json('Goal Natation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* POST update du goal course (Widget Update Goal)*/
router.post('/update_course', (req, res) =>{
    const filter = {_id : "5fd21280bca1f33ea277a864"};
    const update = {course_goal : req.body.course_goal};
    Goal.findOneAndUpdate(filter,update)
        .then(() => res.json('Goal Course updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* POST update du goal velo (Widget Update Goal)*/
router.post('/update_velo', (req, res) =>{
    const filter = {_id : "5fd21280bca1f33ea277a864"};
    const update = {velo_goal : req.body.velo_goal};
    Goal.findOneAndUpdate(filter,update)
        .then(() => res.json('Goal Velo updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

    newGoal.save()
        .then(() => res.json('Goal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;