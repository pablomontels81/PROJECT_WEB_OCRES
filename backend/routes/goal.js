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

/* POST update des goals*/
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

    newGoal.save()
        .then(() => res.json('Goal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;