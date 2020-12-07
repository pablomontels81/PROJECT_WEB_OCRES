const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    ID_Activity: {
        type: String,
        required: false,
    }, 
    ID_User: {
        type: String,
        required: false,
    },
    Type: {
        type: String,
        enum: ['course','velo','natation'],
        required: true,
    },
    Lieu: {
        type: String,
        required: true,
    },
    Distance: {
        type: String,
        required: true,
    },
    Vitesse_Max: {
        type: String,
        required: true,
    },
    Vitesse_Moy: {
        type: String,
        required: true,
    },
    Temps: {
        type: String, 
        required: true,
    },
    Calories: {
        type: String,
        required: true,
    },
    Denivele: {
        type: String,
    },
    Map: {
        type: String,
    },
    Date : {
        type: Date,
        required: true,
    },
})

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;