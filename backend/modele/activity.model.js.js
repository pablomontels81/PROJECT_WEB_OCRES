const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    ID_Activity: {
        type: Number,
        required: false,
    }, 
    ID_User: {
        type: Number,
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
        type: Number,
        required: true,
    },
    Vitesse_Max: {
        type: Number,
        required: true,
    },
    Vitesse_Moy: {
        type: Number,
        required: true,
    },
    Temps: {
        type: Number, 
        required: true,
    },
    Calories: {
        type: Number,
        required: true,
    },
    Denivele: {
        type: Number,
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