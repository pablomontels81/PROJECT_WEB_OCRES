const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
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
        required: false,
    },
    Lieu: {
        type: String,
        required: false,
    },
    Distance: {
        type: Number,
        required: false,
    },
    Vitesse_max: {
        type: Number,
        required: false,
    },
    Vitesse_moy: {
        type: Number,
        required: false,
    },
    Temps: {
        type: String, 
        required: false,
    },
    Calories: {
        type: Number,
        required: false,
    },
    Denivele: {
        type: Number,
        required: false,
    },
    Map: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
})

const Activities = mongoose.model('Activities', activitiesSchema);
module.exports = Activities;