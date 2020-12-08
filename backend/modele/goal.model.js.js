const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    velo_goal: {
        type: Number,
    }, 
    natation_goal: {
        type: Number,
    },
    course_goal: {
        type: Number,
    }, 
})

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;