const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    velo_goal: {
        type: String,
    }, 
    natation_goal: {
        type: String,
    },
    course_goal: {
        type: String,
    }, 
})

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;